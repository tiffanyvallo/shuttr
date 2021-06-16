import React, { useState } from "react";
import Axios from "axios";
import './index.css';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function SignUp() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [passwordConfirmationReg, setPasswordConfirmationReg] = useState('');
  const [isMsg, setIsMsg] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})");
  let newMsgTimeoutHandle = 0;
  const passwordCriteria = ["Password does not meet criteria:",
  "\n• Must be over 8 characters long",
  "\n• Must include numbers and letters", 
  "\n• Must include at least 1 upper and lower case letter",
  "\n• Must include 1 special character e.g. '!@#$%^&*'"];
  let newText = passwordCriteria.join('').split('\n').map(i => {
    return <p>{i}</p>
});


  const componentWillUnmount = () => {
    clearTimeout(newMsgTimeoutHandle);
  }

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
    if (!strongRegex.test(passwordReg)) {
      setNewMsg(newText)
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setNewMsg("")
        newMsgTimeoutHandle = 0;
      }, 8000)
      console.log(newMsg)
    }
    else if (passwordReg !== passwordConfirmationReg) {
      setIsMsg("Passwords do not match")
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setIsMsg("")
        newMsgTimeoutHandle = 0;
      }, 3000)
      console.log(isMsg)
    }
    else {
      setNewMsg("")
      setIsMsg("")
      register()
    }
  };

  return (
    <div class="signup_wrapper">
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
        <br />
        <PasswordStrengthBar password={passwordReg} />
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
      <br />
      {isMsg}
      <br />
      {newMsg}
      <div>
        <br />
        <button onClick={checkValidation}>Create User</button>
      </div>
    </div>
  )
}


