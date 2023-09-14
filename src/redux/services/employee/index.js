import { APP_API_URL } from "@/utils/api-endpoints";
import axios from "axios";


export const CreateEmployee = (data) =>{
    return new Promise((resolve,reject) =>{
        axios.post(`${APP_API_URL.CREATE_EMPLOYEE}`, data)
            .then((res) =>{
                resolve(res.data)
            })
            .catch((err) =>{
                reject(err.message)
            })
    })
}