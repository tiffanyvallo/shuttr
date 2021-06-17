import React, { useState } from "react";
import Axios from "axios";
import './index.css';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function SignUp() {
  const url = 'https://api.cloudinary.com/v1_1/dryaxqxie/image/upload';
  const preset = 'cyber_photos';
  const [image, setImage] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [jobReg, setJobReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  const [passwordConfirmationReg, setPasswordConfirmationReg] = useState('');
  const [isMsg, setIsMsg] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})");
  const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  let newMsgTimeoutHandle = 0;
  const passwordCriteria = ["Password does not meet criteria:",
    "\n• Must be over 4 characters long",
    "\n• Must include numbers and letters",
    "\n• Must include at least 1 upper and lower case letter"]
    
  let newText = passwordCriteria.join('').split('\n').map(i => {
    return <p>{i}</p>
  });


  const componentWillUnmount = () => {
    clearTimeout(newMsgTimeoutHandle);
  }

  const register = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset);
    const res = await Axios.post(url, formData);
    const imageUrl = res.data.secure_url;
    try{
    await Axios.post("http://localhost:3001/signup", {
      name: nameReg,
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      publicId: imageUrl,
      job: jobReg,

    },
      {
        withCredentials: true,
      }).then((response) => {
        console.log(response);
        if (response.data === "User Created") {
          window.location.href = "/login";
        } else if (response.data !== "User Created") {
          setIsMsg("User already exists")
          clearTimeout(newMsgTimeoutHandle);
          newMsgTimeoutHandle = setTimeout(() => {
            setIsMsg("")
            newMsgTimeoutHandle = 0;
          }, 6500)
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = e => {
    setImage(e.target.files[0]);
    const file = e.target.files[0]
  };

  const checkValidation = (e) => {
    if (!emailRegex.test(emailReg)) {
      setEmailMsg("Not a valid email address")
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setEmailMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else if (!strongRegex.test(passwordReg)) {
      setNewMsg(newText)
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setNewMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else if (passwordReg !== passwordConfirmationReg) {
      setIsMsg("Passwords do not match")
      clearTimeout(newMsgTimeoutHandle);
      newMsgTimeoutHandle = setTimeout(() => {
        setIsMsg("")
        newMsgTimeoutHandle = 0;
      }, 6500)
    }
    else {
      register()
    }
  };

  return (
    <div class="signup_wrapper">
      <h1>Sign up in here</h1>
      <input
        placeholder="Username"
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <input
        placeholder = "Name"
          type="text"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
     
    
        <input
        placeholder="Job Title"
          type="text"
          onChange={(e) => {
            setJobReg(e.target.value);
          }}
        />
     
        <input type="email"
        placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />

        <br />
        {emailMsg}
      
        <p>Password</p>

        <input
        placeholder="Password"
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <br />
        <PasswordStrengthBar password={passwordReg} />
      
        <p>Password Confirmation</p>

        <input
        placeholder="Password Confirmation"
          type="password"
          onChange={(e) => {
            setPasswordConfirmationReg(e.target.value);
          }}
        />

      
      <br />


        <input type='file' name='image' onChange={onChange}/>
     

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
