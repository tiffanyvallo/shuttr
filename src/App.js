import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from './components/Navbar' 
import index from './components/Index' 
import Login from './components/Login' 
import SignUp from './components/SignUp' 
import Preferences from './components/Preferences'
import ImageUpload from './components/ImageUpload' 
import Profile from './pages/Profile'
import PhotosPage from './components/photo-page'

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <h1>Cyber Playground</h1>
      <Switch>
        <Route path="/" component={index} exact />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Preferences" component={Preferences} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route path="/Profile" component={Profile} />
        <Route component={Error} />
        
      </Switch>
      {/* <PhotosPage /> */}
    </div>
  );
}

export default App;
