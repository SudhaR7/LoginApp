import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
function App()
{
  const [isAuth,setIsAuth]=useState(false)
  useEffect(()=>{
    const authStatus=localStorage.getItem('isAuth')
    setIsAuth(authStatus=='true')
  },[]);
  const handleLogin=()=>{
    setIsAuth(true);
    localStorage.setItem('isAuth','true')
  };
  const handleLogout=()=>{
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };
  return(
    <Router>
      <Routes>
       <Route path="/" element={<Login onLogin={handleLogin} />} />
       <Route path='/dashboard' element={<ProtectedRoute isAuth={isAuth}>
        <Dashboard onLogout={handleLogout}/>
       </ProtectedRoute>}/>
       </Routes>
    </Router>
  );
}
export default App;
