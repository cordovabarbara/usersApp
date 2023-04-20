import axios, { Axios } from "axios"
import { useState } from "react"

const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = 'https://users-crud.academlo.tech/users/'

    const getAllUsers = () =>{
        axios.get (url)
            .then(res => setUsers (res.data))
            .cath(err => console.log(err))
    }

    const createNewUser = () =>{
        axios.post(url, data)
        .then(res => getAllUsers())
        .cath(err => console.log(err))
    }


    return{
        users,
        getAllUsers
    }
    
}

export default useUserCrud