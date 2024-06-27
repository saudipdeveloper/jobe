import axios from "axios";
import { useEffect, useState } from "react";

const API = 'https://jsonplaceholder.typicode.com/posts'

const GetThanMethod = () => {

 const [showData, setShowData] = useState([])
 const [isLoading, setIsLoading] = useState(false);
 const [err, setErr] = useState("")

 const dataHandler = () => {
    setIsLoading(true)
    axios.get(API).then((res) => {
        setShowData(res.data)
        setIsLoading(false)
    }).catch((err) => setErr(err.message))
    
 }
    useEffect(() => {
        setTimeout(() => {
            dataHandler()
        }, 3000)
    }, [])

 if (err) {
    return <h1><em>{err}</em></h1>
 }

 if (isLoading) {
    return <h1><em>Loading.......</em></h1>
 }

    return (
        <>
            <h1>Hey this is the example of Get Method axios and than-catch</h1>
            <ol>
                {showData.map((e) => {
                    return <li key={e.id}>
                        {e.title}
                    </li>
                })}
            </ol>
        </>
    )
}


export default GetThanMethod;