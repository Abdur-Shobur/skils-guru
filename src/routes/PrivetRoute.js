import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthUser } from '../contextApi/AuthContext'

function PrivetRoute({ children }) {
  const { user, loading } = useContext(AuthUser)
  const location = useLocation()
  if (loading) {
    return <div>Loading.......</div>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivetRoute
