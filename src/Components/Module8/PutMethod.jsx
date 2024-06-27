import axios from "axios";
import { useState } from "react"

const API ="https://jsonplaceholder.typicode.com/users/2"

const PutMethod = () => {

    const [data, setData] = useState("");
    const [err, setErr] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
   

    const handleDataget = () => {
        axios.get(API).then((response) => setData(response.data)).catch((err) => setErr(err.massage))
    } 

    const handledataPUT = () => {
        axios.put(API,{ name, username, email}).then((response) => setData(response.data)).catch((err) => setErr(err.massage))
    }
       

    return(
        <>
        <h1>Learning Put method using axios</h1>
        <h2>Id:- {data.id}</h2>
        <h2>Name:- {data.name}</h2>
        <h2>Username:- {data.username}</h2>
        <h2>Email:- {data.email}</h2> <br />
        <button onClick={handleDataget}>GetData</button> <br />
        
        <em>Name</em> <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>  <br />
        <em>Usename</em> <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> <br />
        <em>email</em> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
        <button onClick={handledataPUT}>Change Data</button>
        </>
    )
}

export default PutMethod;