import React, {useState} from "react";
import Axios from "axios";
import './index.css'


export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
      
      <label>
        <p>Username</p>
        <input 
        type="text" 
        placeholder="Username"
        onChange={(e) => {
          setLoginUsername(e.target.value);
          }}
        />
      </label>
      <label>
        <p>Password</p>
        <input 
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
          }} />
      </label>
      <div>
        <button type="submit" onClick={login}>Log In</button>
      </div>
    </div>
    )
}

