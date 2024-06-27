import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigation = useNavigate()

    const handleLogin = () => {
        localStorage.setItem('login' , true)
        navigation('/')
    }

    useEffect(()=>{
        const loginToken = localStorage.getItem('login');
        if(loginToken){
             navigation('/')
        }
    },[])

    return (
        <>
           <h1>Fill Your Credential</h1>
           <label>User Id</label> <input type="text" placeholder="Enter Your Email"/>
           <br />
           <br />
           <label>Password</label> <input type="text" placeholder="Enter Your Password" />
           <br />
           <br />
           <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </>
    );
};

export default LoginPage;