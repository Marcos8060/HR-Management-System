import { useContext } from 'react'
import { authContext } from '@/AuthContext'


export const useAuth = () =>  {
    const { user } = useContext(authContext)

    return user
}