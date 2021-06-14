import React, { useState } from "react";
import Axios from "axios";

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
    <div>
      <h1>Sign up in here</h1>
      <label>
        <p>Name</p>
        <input
          type="text"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
      </label>
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
        <input type="email"
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
      <label>
        <p>Password Confirmation</p>
        <input
          type="password"
          onChange={(e) => {
            setPasswordConfirmationReg(e.target.value);
          }}
        />
      </label>
      {isMsg}
      <div>
        <br />
        <button onClick={checkValidation}>Create User</button>
      </div>
    </div>
  )
}


