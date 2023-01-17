import React from 'react'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'

const LoginPage = () => {
    const user = true;
    // const user = false;

    if(user) return <Navigate replace to={ROUTES.CARDS}/>

  return (
    <div>LoginPage</div>
  )
}

export default LoginPage