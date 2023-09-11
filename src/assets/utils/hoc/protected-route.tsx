import React,{ReactNode} from 'react'
import { useSelector } from 'react-redux'
import { menus } from '../menu'
import { useRouter } from 'next/router'
import NotAuthorized from '@/pages/dashboard/not-authorised'

type ProtectedRouteProps = {
    href: string;
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