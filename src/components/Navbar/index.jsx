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
    

   // ---------------------------//
  //  <nav>      
  //    <ul>        
  //      {data ? (          
  //      <li>            
  //        <a onClick={logout}>Logout</a>          
  //        </li>        
  //        ) : null}
  //       <li>          
  //         <Link to="/">Home</Link>        
  //         </li>
  //       {data ? null : (          
  //       <li>            
  //         <Link to="/Signup">Signup</Link>          
  //         </li>        
  //         )}
        
  //       {data ? null : (          
  //       <li>            
  //         <Link to="/Login">Login</Link>          
  //         </li>        
  //         )}    
  //           </ul>    
  //           </nav>
            //-----------
    <nav> 
      
         
     <Link to="/" className="index-button">
       <li className="brand-logo">Home</li>      
      </Link>
      {data ? null : ( 
      <Link to="/login" className="login-button">                  
      <li className="login">Log In</li>    
      </Link> )} 
      {data ? null : (
         <Link to="/signup" className="login-button">                  
      <li className="login">Sign Up</li>    
      </Link> 
      )}
      <Link to="/Map" className="index-button">
      <li className="map">Map</li>
      </Link>  
      <Link to="/ImageUpload" className="login-button">                 
        <li className="login">Upload</li>    
        </Link>   
         {data ? (  <Link to="/" onClick={logout}  className="index-button">
       <li className="brand-logo">Logout</li>      
      </Link>                
         ) : null}
        </nav>            
    )
}

