import axios from "axios"
import { useState, useEffect } from "react"


const API = 'https://jsonplaceholder.typicode.com/posts'

const GetAsyncMethod = () => {
    const [showData, setShowData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("")

    const dataHandler = async () => {
        setIsLoading(true)
        try {
            const DataFetch = await axios.get(API);
            setIsLoading(false)
            setShowData(DataFetch.data)
            console.log(DataFetch.data)
        }
        catch (err) {
            setErr(err.message)
        }
    }

  
  
    useEffect(() => {
    dataHandler()
   }, [])

   if(err) {
      return <h1><em>{err}</em></h1>
   }
   if(isLoading) {
    return <h1><em>Loading......</em></h1>
   }

    return (
        <>
           <h1>Hey is this is the example of Get method using axios and async-await</h1>
           <ol>
             {
                showData.map((e) => {
                    return <li key={e.id}>
                        {e.title}
                    </li>
                })
             }
           </ol>
        </>
    )
}

export default GetAsyncMethod;