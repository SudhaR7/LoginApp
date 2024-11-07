import React from "react";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Dashboard({onLogout})
{
    //const navigate=<Navigate to='/login'/>
    const navigate=useNavigate();
    const username=localStorage.getItem("username")
    const handleLogout=()=>{
        onLogout();
        navigate("/login")
    };
return(
    <div>
        <h1>Welcome to Dashboard {username}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
    //(<Navigate to='/login'/>)
);
};
export default Dashboard;