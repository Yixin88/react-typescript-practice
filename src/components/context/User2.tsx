import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function UserTwo() {

  const userContext = useContext(UserContext)

  const handleLogin = () => {
    userContext.setUser({
      name: 'Yixin',
      email: 'kek2@hotmail.co.uk'
    })
  }
  
  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
}
