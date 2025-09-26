import React from 'react'
import withAuth from '../hoc/withAuth';


export default function Profile({username}) {
  return (
    <div>Bienvenue {username}</div>
  )
}



export const ProtectedProfile = withAuth(Profile);