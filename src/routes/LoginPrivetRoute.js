import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthUser } from '../contextApi/AuthContext'

function LoginPrivetRoute({ children }) {
  const { user } = useContext(AuthUser)

  if (!user && !user?.uid) {
    return children
  }
  return <Navigate to="/" />
}

export default LoginPrivetRoute
