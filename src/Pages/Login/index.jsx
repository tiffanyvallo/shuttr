import React, {useState} from "react";
import Axios from "axios";
import './index.css'
import { Link } from 'react-router-dom';


export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const signup = () =>{
    window.location.href = "/"; 
  }
   const login = () => {
    
    Axios({     
       method: "POST",      
       data: { 
        username: loginUsername.toLowerCase(),        
        password: loginPassword,      
      },      withCredentials: true,      
      url: "http://localhost:3001/login",    
      }).then((res) => {      
      if (res.data === "Successfully Authenticated") {
        window.location.href = "/";      
      }    
    });  
  };
  
  return (
    <div class="login_wrapper">
      <h1>Log in here</h1>
      

        <input 
        type="text" 
        placeholder="Username"
        onChange={(e) => {
          setLoginUsername(e.target.value);
          }}
        />
     
      
        <input 
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
          }} />
      
      <div>
        <button type="submit" onClick={login}>Log In</button>
      </div>
      <div >
      <br />
        Don't have an account? <Link to="/signup" className="btn btn-primary">   
        <br />               
      <button>Sign Up</button>   
      </Link> 
      </div>
    </div>
    )
}

