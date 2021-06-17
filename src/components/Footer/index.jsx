import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import "./index.css"
import Axios from 'axios'
import { UserContext } from "../../Contexts/UserContext";

export default function Footer() {
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
    <footer> 
      
       <img class="footer_logo" src={"./shuttrlogo.png"} />
         <p class="copyright">&copy; shuttr 2021</p>
        </footer>            
    )
}

