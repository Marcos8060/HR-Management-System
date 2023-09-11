import React,{ReactNode,useContext} from 'react'
import { useSelector } from 'react-redux'
import NotAuthorized from '@/pages/dashboard/not-authorised'
import { authContext } from '@/AuthContext'
import Login from '@/AuthContext/login'
import Layout from '@/components/Layout'

type ProtectedRouteProps = {
    permission: string,
    children: ReactNode
  }

  type Permission = {
    id: number;
    permission: string;
    role_name: string;
  };

const ProtectedRoute = ({ permission,children }: ProtectedRouteProps) => {
    const { userPermissions } = useSelector(( { auth }) => auth)


    // check if current user has permission to access the route in question
    const isAuthorized = userPermissions && userPermissions.find((perm: Permission) => perm.permission === permission)


    if (!isAuthorized) {
      return <NotAuthorized />
    }

  return (
    <>{ children }</>
  )
}



export default ProtectedRoute