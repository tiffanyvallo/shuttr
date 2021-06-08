import React from "react"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{color: "#FF8C00", backgroundColor: "coral-pink"}}>
    <Link to="/" className="index-button">
      <div className="Home">Home</div>
    </Link>
    <Link to="/login" className="login-button">            
      <div className="login">Log In</div>
    </Link>
    <Link to="/signup" className="login-button">            
      <div className="login">Sign Up</div>
    </Link>
    </nav>
    )
}

export default NavBar