import axios from "axios";
import { APP_API_URL } from "../../../utils/api-endpoints";


export const fetchClients = (auth) =>{
    return new Promise((resolve,reject) =>{
        axios.get(`${APP_API_URL.FETCH_CLIENTS}`,{
            headers:{
                Authorization: `bearer ${auth.token}`,                
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