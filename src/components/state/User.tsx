import React, { useState } from 'react'

type AuthUser = {
  name: string,
  email: string
}

export default function User() {
  const [user, setUser] = useState<null | AuthUser>(null)
  // const [user, setUser] = useState<AuthUser>({} as AuthUser) // This is another way to say that this state will never be anything else besides AuthUser type, so we can get rid of ? in the return


  const handleLogin = () => {
    setUser({
      name: 'Yixin',
      email: 'kek@gmail.com'
    })
  }
  
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}
