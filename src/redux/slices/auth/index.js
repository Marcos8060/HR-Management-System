import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userPermissions: [],
}


const PermissionSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers:{
        setUserPermissions:(state,action) =>{
            state.userPermissions = action.payload
        }
    }
})

export const { setUserPermissions } = PermissionSlice.actions;