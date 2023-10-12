import axios from "axios";
import { APP_API_URL } from "../../../utils/api-endpoints";


export const fetchProjects = (auth) =>{
    console.log("SERVICE_AUTH ",auth);
    return new Promise((resolve,reject) =>{
        axios.get(`${APP_API_URL.FETCH_PROJECTS}`,{
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