import React from "react"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Log in here</h1>
      <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">LogIn</button>
      </div>
    </form>
    </div>
    )
}

export default Login
