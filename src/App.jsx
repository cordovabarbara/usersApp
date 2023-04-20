import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components.jsx/UserCard'

function App() {

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div className="App">
    <h2>Users</h2>
    <div>
      {
        users?.map(user => {
          <UserCard
            key={user.id}
            user={user}
          />
        })

      }
    </div>
    </div>
  )
}

export default App
