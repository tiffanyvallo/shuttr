import React, {useState} from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const log = () => {
    
    Axios.post("http://localhost:3001/login", {
      username: loginUsername, 
      password: loginPassword,
  },
  { withCredentials: true
   }).then((response) => {
     if (response.data.message) {
       setLoginStatus(response.data.message);
     } else {
       setLoginStatus(response.data[0].username)
     }
    });
  };
  
  return (
    <div>
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
        <button type="submit" onClick={log}>LogIn</button>
      </div>
    
    <h1>{loginStatus}</h1>
    </div>
    )
}

export default Login