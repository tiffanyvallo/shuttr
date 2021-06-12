import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import NavBar from './components/Navbar' 
import Index from './components/Index' 
import Login from './components/Login' 
import Map from './components/Map' 
import SignUp from './components/SignUp' 
import Preferences from './components/Preferences'
import ImageUpload from './components/ImageUpload' 
import PhotosPage from './components/photo-page'
import HashtagsPage from "./Pages/hashtags-page";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Cyber Playground</h1>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Map" component={Map} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Preferences" component={Preferences} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route component={Error} />
      </Switch>
      {/* <PhotosPage /> */}
      <HashtagsPage />
    </div>
  );
}

export default App;
