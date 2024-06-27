import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const ProtectedRouting = (props) => {
    const  navigate = useNavigate();

     useEffect(()=>{
        const getToken = localStorage.getItem('login');
        if(!getToken){
            navigate("/login")
        }
     },[navigate])

    return(
        <props.home/>
    )
}


export default ProtectedRouting;