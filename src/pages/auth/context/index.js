import { useState,useContext } from "react";
import { APP_API_URL } from "@/utils/axiosInstance/api-endpoints";
import { useRouter } from "next/router";
import axios from 'axios'
import jwtDecode from "jwt-decode";



export const authContext = useContext()

const AuthProvider = ({ children}) =>{
    const router = useRouter();
    const [authToken,setAuthToken] = useState(() => typeof window !== 'undefined' && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    const [user,setUser] = useState(() => typeof window !== 'undefined' && localStorage.getItem('token') ? localStorage.getItem('token') : null)
    const [message,setMessage] = useState('');


    // login User
    const loginUser = async(username,password)=>{
        try {
            const response = await axios.post(APP_API_URL,{
                username: username,
                password: password
            })
            if(response.status === 200){
                const data = response.data;
                setAuthToken(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem('token',JSON.stringify(data));
                router.push('/')
            }
        } catch (error) {
            setMessage(error.response.data.detail)
        }  
    }

    
    // logout User
    const logoutUser = () =>{
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('token');
        router.push('/login');
    }


    let contextData = {
        loginUser: loginUser,
        message: message,
        logoutUser: logoutUser
    }
    return (
        <authContext.Provider value={contextData}>
            {children}
        </authContext.Provider>
    )
}