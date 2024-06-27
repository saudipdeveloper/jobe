import axios from "axios"
import { useEffect, useState } from "react"



const API ='https://jsonplaceholder.typicode.com/users/9'

const DeleteMethod = () => {
    const [data, setData] = useState("")

    useEffect(() => {
        axios.get(API).then((response) => setData(response.data)).catch((err) => console.log(err.massage))
    }, [])

    const deleteHandler = () => {
        axios.delete(API).then((resp) => setData(resp.data)).catch((err) => console.log(err.massage))
    }

    return (
        <>
          <h1>Learing put method using axios</h1>
          <h2>Id: {data.id}</h2>
          <h2>Name :- {data.name}</h2>
          <h2>Username:- {data.username}</h2>
          <h2>Email :- {data.email}</h2>
        
        <button onClick={deleteHandler}>Delete Data</button>
        
        </>
    )
}

export default DeleteMethod;