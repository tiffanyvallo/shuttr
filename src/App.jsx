import './App.css';
import React from "react";
import index from './components/Index/index' 
import SignUp from './components/SignUp/index'
import Login from './components/Login/index' 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useContext} from 'react'
import {UserContext} from './Contexts/UserContext'
import NavBar from './components/Navbar/index' 
import Preferences from './components/Preferences'
import ImageUpload from './components/ImageUpload' 
import Profile from './pages/Profile'
import PhotosPage from './components/photo-page'

export default function App() {
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
      <h1>Cyber Playground</h1>
      <Switch>
        <Route path="/" exact component={index}  />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Preferences" component={Preferences} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route path="/Profile" component={Profile} />
        <Route component={Error} />
        
      </Switch>
      {/* <PhotosPage /> */}
      </Router>
    </div>
  );
}


