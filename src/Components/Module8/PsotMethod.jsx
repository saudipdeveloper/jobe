import axios from "axios";
import { useState } from "react";

const API ='https://jsonplaceholder.typicode.com/users'


const PsotMethod = () => {

    const [name, setName] = useState();
    const [uname, setUname] = useState();
    const [email, setEmail]= useState();
    const [err, setErr] = useState("")
    
    const postData = () => { 
       axios.post(API, { name, uname, email }).then((response) => console.log(response.data)).catch((err) => setErr(err.message))
        
    }
 

    return (
        <div className="d-flex flex-column justify-content-center">
            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            Username: <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
            emails: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <button onClick={postData}>Data Post</button>
        </div>
    )
}

export default PsotMethod;