import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/UserContext'

export const PrivateRoute = ({children}) => {

const {user, loading} = useAuth()

if(loading) {
    return <div>loading...</div>
}

if(user && user.uid) {
    return children;
}

return <Navigate to="/login" />

}
