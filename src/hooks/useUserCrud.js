import axios from "axios"
import { useState } from "react"

const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = 'https://users-crud.academlo.tech/users/'

    const getAllUsers = () =>{
        axios.get (url)
            .then(res => setUsers (res.data))
            .cath(err => console.log(err))
    }

    const createNewUser = data =>{
        axios.post(url, data)
        .then(res => getAllUsers())
        .cath(err => console.log(err))
    }

    const deleteUserById = id =>{
        const urlDelete =`${url}${id}/`
        axios.delete(urlDelete)
        .then(res => getAllUsers())
        .cath(err => console.log(err))
    }

    const updateUserById = (id, data) => {
        const urlUpdate =`${url}${id}/`
        axios.patch(urlUpdate, data)
        .then(res =>getAllUsers())
        .cath(err => console.log(err))
    }

    

    return{
        users,
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById,
    }
    
}

export default useUserCrud