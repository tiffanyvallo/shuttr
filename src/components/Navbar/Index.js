import React from "react"
import { Link } from 'react-router-dom';
import "./index.css"
import Axios from 'axios'
import { UserContext } from "../../Contexts/UserContext";
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

function NavBar() {
  const data = useContext(UserContext);
  const logout = () => {
    Axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      if (res.data == "success") {
        return (window.location.href = "/");
      }
    });
  };
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
    {data ? (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        ) : null}
    </nav>
    )
}

export default NavBar