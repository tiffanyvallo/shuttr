import './App.css';
import React from "react";
import Index from './Pages/Index' 
import SignUp from './Pages/SignUp'
import Map from './Pages/Map'
import Login from './Pages/Login' 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useContext} from 'react'
import {UserContext} from './Contexts/UserContext'
import NavBar from './components/Navbar'
import ImageUpload from './Pages/ImageUpload' 
import Profile from './Pages/Profile'
import Discover from './Pages/Discover'
import Footer from './components/Footer'
import Inspiration from './Pages/Inspiration'

export default function App() {
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div>
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Index}  />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Map" component={Map} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route path="/Inspiration" component={Inspiration} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Discover" component={Discover} />
        <Route component={Error} />
      </Switch>
      </Router>
    </div>
    <Footer />
    </div>
  );
}


