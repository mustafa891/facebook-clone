import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth} from '../context/UserContext'

export const UnauthorizedRoute = ({Component}) => {
  
    const {user, loading} = useAuth()

    if(loading) {
        return <div>loading...</div>
    }

    if(!user ) {
        return <Component />
    }

    if(user && user.uid) {
        return <Navigate to="/" />
    }

}
