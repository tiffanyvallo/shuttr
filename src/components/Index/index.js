import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from '../../Contexts/UserContext';

function Index() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const data = useContext(UserContext);

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "GET",
    });
    const json = await response.json();

    // JSON is an array of user objects
    setUsers(json);
  };

  const createUser = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });
    const json = await response.json();

    console.log(json)
  };

  useEffect(() => getAllUsers(), []);

  return (

    <div>
              <div>
       {data ? <p>Welcome Back {data.username}</p> : <p>Please Log In</p>}
      
    </div>
      <h1>Welcome to the feed</h1>
      {users.map((u) => (
        <div>We found user {u.username}</div>
      ))}
      <div>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={createUser}> Submit </button>
      </div>
    </div>
  );
}

export default Index;
