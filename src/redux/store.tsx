import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth';
import projectsReducer from './features/projects';
import clientsReducer from './features/clients';



export const store = configureStore({
    reducer:{
        auth: authReducer,
        project: projectsReducer,
        client: clientsReducer,
    }
})