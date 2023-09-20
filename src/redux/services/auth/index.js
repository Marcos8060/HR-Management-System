import { APP_API_URL } from "@/utils/api-endpoints";
import axios from "axios";


export const fetchUserPermissions = (userId) =>{
    return new Promise((resolve,reject) =>{
        axios.get(`${APP_API_URL.GET_USER_PERMISSIONS}`,{
            params:{
                userId: userId,
            }
        })
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}

export const registerUser = (payload) =>{
    return new Promise((resolve,reject) =>{
        axios.get(`${APP_API_URL.CREATE_USER}`,payload)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}

export const fetchRoles = () =>{
    return new Promise((resolve,reject) =>{
        axios.get(`${APP_API_URL.FETCH_ROLES}`)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}