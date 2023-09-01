import { useState,useContext } from "react";
import { APP_API_URL } from "@/utils/axiosInstance/api-endpoints";
import { useRouter } from "next/router";
import axios from 'axios'



export const authContext = useContext()

const AuthProvider = ({ children}) =>{
    const router = useRouter();
    const [authToken,setAuthToken] = useState(() => typeof window !== 'undefined' && localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)
    const [user,setUser] = useState(() => typeof window !== 'undefined' && localStorage.getItem('token') ? localStorage.getItem('token') : null)
    const [message,setMessage] = useState('');


    const loginUser = async(username,password)=>{
        try {
            const response = await axios.post(APP_API_URL,{
                username: username,
                password: password
            })
            if(response.status === 200){
                const data = response.data;
                setAuthToken(data);
                setUser(data);
                router.push('/')
            }
        } catch (error) {
            setMessage(error)
        }  
    }

    let contextData = {
        loginUser: '',
        logOutUser: '',
    }
    return (
        <authContext.Provider value={contextData}>
            {children}
        </authContext.Provider>
    )
}