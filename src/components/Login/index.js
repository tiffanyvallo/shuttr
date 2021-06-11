import React, {useState} from "react";
import Axios from "axios";


function LogIn() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const log = () => {
    
    Axios.post("http://localhost:3001/login", {
      username: loginUsername, 
      password: loginPassword,
  },
  { withCredentials: true
   }).then((res) => console.log(res)) ;
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
    </div>
    )
}

export default LogIn