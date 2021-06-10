import React from "react"
import { Link } from 'react-router-dom';
import "./index.css"
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

function NavBar() {
  return (
    <nav>
    <Link to="/" className="index-button">
      <li className="brand-logo">Home</li>
    </Link>
    <Link to="/login" className="login-button">            
      <li className="login">Log In</li>
    </Link>
    <Link to="/signup" className="login-button">            
      <li className="login">Sign Up</li>
    </Link>
    <Link to="/Preferences" className="login-button">            
      <li className="login">Preferences</li>
    </Link>
    <Link to="/ImageUpload" className="login-button">            
      <li className="login">Upload</li>
    </Link>
    </nav>
    )
}

export default NavBar