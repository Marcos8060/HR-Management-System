import React,{ReactNode,useContext} from 'react'
import { useSelector } from 'react-redux'
import NotAuthorized from '@/components/not-authorised'


type ProtectedRouteProps = {
    permission: string,
    children: ReactNode
  }

  type Permission = {
    id: number;
    name: string;
    role_name: string;
  };

const ProtectedRoute = ({ permission,children }: ProtectedRouteProps) => {
    const { userPermissions } = useSelector(( { auth }) => auth)

    console.log("USER_PERMISSIONS ",userPermissions)


    // check if current user has permission to access the route in question
    const isAuthorized = userPermissions && userPermissions.find((perm: Permission) => perm.name === permission)

    if (!isAuthorized) {
      return <NotAuthorized />
    }

  return (
    <>{ children }</>
  )
}



export default ProtectedRoute