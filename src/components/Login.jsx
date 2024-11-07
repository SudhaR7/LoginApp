import React,{useState} from "react";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login({onLogin})
    {    
    //const navigate=<Navigate to='/dashboard'/>
    const navigate=useNavigate();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const loginUsername="sudha"
    const loginPassword="Sudha@123"
    const handleLogin=()=>{
        if(username==loginUsername && password==loginPassword)
            {
                onLogin()
                navigate('/dashboard')
                localStorage.setItem("isAuth","true")
                localStorage.setItem("username",username)
                localStorage.setItem("password",password)
                alert("Login Successful");       

            }
        else{
            alert("Login Failed...Incorrect Username or Password")
            }
    };

  return(
    <div>
    <h1>Login Page</h1>
    <label>Username </label>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <br/>
    <label>Password </label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <button onClick={handleLogin}>Login</button>
    </div>
  );
  };
  export default Login;