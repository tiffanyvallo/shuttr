import React, { useState } from "react";
import Axios from "axios";
import './index.css'

export default function SignUp() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [passwordConfirmationReg, setPasswordConfirmationReg] = useState('');
  const [isMsg, setIsMsg] = useState('');

  const register = () => {

    Axios.post("http://localhost:3001/signup", {
      name: nameReg,
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    },
      {
        withCredentials: true,
      }).then((response) => {
        console.log(response);
        if (response.data === "User Created") {
          window.location.href = "/login";
        }
      });
  };

  const checkValidation = (e) => {
    if (passwordReg !== passwordConfirmationReg) {
      setIsMsg("Passwords do not match")
      console.log(isMsg)
    }
    else {
      register()
    }
  };

  return (
    <div class="signup_wrapper"> 
      <h1>Sign up in here</h1>
      
        <input
        placeholder = "Name"
          type="text"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
     
    
        <input
        placeholder="Username"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
     
        <input type="email"
        placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
     
        <input
        placeholder="Password"
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
    
        <input
        placeholder="Password Confirmation"
          type="password"
          onChange={(e) => {
            setPasswordConfirmationReg(e.target.value);
          }}
        />
     
      {isMsg}
      <div>
        <br />
        <button onClick={checkValidation}>Create User</button>
      </div>
      </div>
  )
}


