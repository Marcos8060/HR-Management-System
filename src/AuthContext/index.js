import { useState, createContext, useEffect } from "react";
import { APP_API_URL } from "@/utils/api-endpoints";
import { useRouter } from "next/router";
import axios from "axios";
import jwtDecode from "jwt-decode";
import SimpleCrypto from "simple-crypto-js";
import { useDispatch } from "react-redux";
import { getAllUserPermissions } from "@/redux/features/auth";
import { toast } from 'react-toastify'

export const authContext = createContext();

const secretKey = new SimpleCrypto(process.env.NEXT_PUBLIC_ENCRYPTION_KEY);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const [authToken, setAuthToken] = useState(() =>
  //   typeof window !== "undefined" && localStorage.getItem("token")
  //     ? JSON.parse(localStorage.getItem("token"))
  //     : null
  // );
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  // login User
  const loginUser = async (username, password) => {
    // encrypt login payload
    const encryptedData = {
      data: secretKey.encrypt({ username, password }),
    };
    try {
      const response = await axios.post(APP_API_URL.LOGIN, encryptedData);
      if (response.status === 200) {
        const data = secretKey.decrypt(response.data);
        // setAuthToken(data);
        const decodedUser = jwtDecode(data.access);
        setUser({...decodedUser, token: data.access});
        try {
          await dispatch(getAllUserPermissions(decodedUser?.user_id));
          router.push("/dashboard");
          localStorage.setItem("token", JSON.stringify(data.access));
          localStorage.setItem("refresh", JSON.stringify(data.refresh));
        } catch (error) {
        }
      }
    } catch (error) {
      toast.error(error.response.data.detail)
      setMessage(error.response.data.detail);
    }
  };

  // logout User
  const logoutUser = () => {
    // setAuthToken(null);
    setUser(null);
    localStorage.removeItem("token");
    router.push("/");
  };

  let contextData = {
    loginUser: loginUser,
    message: message,
    logoutUser: logoutUser,
    user: user,
  };

  // decode the token and set the user when a component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    let decodedToken;
    if (storedToken) {
      decodedToken = jwtDecode(storedToken);

      setUser({...decodedToken, token: JSON.parse(storedToken)});
    }
    const fetchPermissions = async () => {
      if (decodedToken) {
        await dispatch(getAllUserPermissions(decodedToken.user_id));
      }
    };
    fetchPermissions();
  }, []);

  return (
    <authContext.Provider value={contextData}>{children}</authContext.Provider>
  );
};
