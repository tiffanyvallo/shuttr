import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import "./index.css"
import Axios from 'axios'
import { UserContext } from "../../Contexts/UserContext";

// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';

export default function NavBar() {
  const data = useContext(UserContext);
  const logout = () => {
    Axios.get("http://localhost:3001/logout", {
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      if (res.data === "success") {
        return (window.location.href = "/");
      }
    });
  };
  return (
    <nav> 
      
         
     <Link to="/" className="index-button">
       <li className="brand-logo">Discover</li>      
      </Link>
      <Link to="/profile" className="index-button">                  
          <li>Profile</li>    
      </Link> 
      <Link to="/Map" className="index-button">
      <li>Map</li>
      </Link>  
      <Link to="/Inspiration" className="index-button">
      <li>Inspiration</li>
      </Link>  

      {/* <img class="footer_logo" src={process.env.PUBLIC_URL + "dark_logo.png"} /> */}


      <Link to="/ImageUpload" className="index-button">                 
        <li>Upload</li>    
        </Link>   
         {data ? (  <Link to="/" onClick={logout}  className="index-button">
       <li className="brand-logo">Logout</li>      
      </Link>                
         ) : null}
      {data ? null : ( 
      <Link to="/login" className="login-button">             
      <li className="login">Log In</li>     
      </Link> )} 
        </nav>            
    )
}

