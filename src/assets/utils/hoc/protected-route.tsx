import React from 'react'
import { menus } from '../menu'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const ProtectedRoute = () => {
    const { userPermissions } = useSelector(( { auth }) => auth)
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute