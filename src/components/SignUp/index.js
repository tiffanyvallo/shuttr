import React, {useState} from "react";
import Axios from "axios";


 

function SignUp() {
  
  const[usernameReg, setUsernameReg] = useState('');
  const[passwordReg, setPasswordReg] = useState('');
  const[emailReg, setEmailReg] = useState('');
  
  const register = () => {
    
      Axios.post("http://localhost:3001/users", {
      username: usernameReg, 
      password: passwordReg,
      email: emailReg,
  },
  {
      withCredentials: true,
   }).then((response) => {
     console.log(response);
   });
  };



  return (
    <div> 
      <h1>Sign up in here</h1>
      <label>
        <p>Username</p>
        <input 
          type="text" 
          onChange={(e) => {
          setUsernameReg(e.target.value);
          }}
          />
      </label>
      <label>
        <p>Email</p>
        <input 
          type="email" 
          onChange={(e) => {
          setEmailReg(e.target.value);
          }}
          />
      </label>
      <label>
        <p>Password</p>
        <input 
          type="password" 
          onChange={(e) => {
          setPasswordReg(e.target.value);
          }}
          />
      </label>
      <div>
        <br />
        <button type="submit" onClick={register}>Create User</button>
      </div>
    </div>
    )
}

export default SignUp;
