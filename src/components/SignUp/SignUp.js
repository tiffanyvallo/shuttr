import React, {useState} from "react";
import Axios from "axios";

 

function SignUp() {

  const[usernameReg, setUsernameReg] = useState('');
  const[passwordReg, setPasswordReg] = useState('');
  
  const register = (e) => {
    e.preventDefault()
    Axios.post("http://localhost3001/signup", {
      username: usernameReg, 
      password: passwordReg,
   }).then((response) => {
     console.log(response);
   });
  };



  return (
    <div> 
      <h1>Sign up in here</h1>
      <form>
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
        <p>Password</p>
        <input 
          type="text" 
          onChange={(e) => {
          setPasswordReg(e.target.value);
          }}
          />
      </label>
      <div>
        <br />
        <button type="submit" onClick={register}>Create User</button>
      </div>
    </form>
    </div>
    )
}

export default SignUp;