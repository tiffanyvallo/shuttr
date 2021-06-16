import React, { useState } from "react";
import Axios from "axios";
import './index.css'

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

        <input type='file' name='image' onChange={onChange}/>
     
      {isMsg}
      <div>
        <br />
        <button onClick={checkValidation}>Create User</button>
      </div>
      </div>
  )
}
