import { useState,useContext } from "react";

export const authContext = useContext()

const AuthProvider = ({ children}) =>{


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