import React from 'react';
import { useContext } from "react";
import {UserContext} from '../../Contexts/UserContext';

export default function Index() {
  const data = useContext(UserContext);
  
  return (
    <div>
       {data ? <p>Welcome Back {data.username}</p> : <p>Please Log In</p>}
      
    </div>
     
     
  );
}

 
