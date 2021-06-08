import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from './components/Navbar' 
import Index from './components/Index' 
import Login from './components/Login' 
import SignUp from './components/SignUp' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
