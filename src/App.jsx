import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

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
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        />

    <div>
      {
        users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            updateUserById={updateUserById}
          />
          
        ))
        
      }
    </div>
    </div>
  )
}

export default App
