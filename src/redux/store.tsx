import { config } from '@/pages/api/login/user-permissions';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';



export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})