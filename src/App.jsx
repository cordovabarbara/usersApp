import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components.jsx/UserCard'
import FormUser from './components.jsx/FormUser'

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
            deleteUserById={deleteUserById}
          />
          
        })
        
      }
    </div>
    </div>
  )
}

export default App
