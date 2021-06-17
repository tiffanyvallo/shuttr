import './App.css';
import React from "react";
import SignUp from './Pages/SignUp'
import Map from './Pages/Map'
import Login from './Pages/Login' 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useContext} from 'react'
import {UserContext} from './Contexts/UserContext'
import NavBar from './components/Navbar'
import ImageUpload from './Pages/ImageUpload' 
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import Discover from './Pages/Discover'
import Footer from './components/Footer'
import Inspiration from './Pages/Inspiration'
import MiniMap from './components/MiniMap'
import Architecture from './Pages/Architecture'
import Colourful from './Pages/Colourful'
import Greenery from './Pages/Greenery'
import Vibes from './Pages/Vibes'
import Tourist from './Pages/Tourist'
import StreetArt from './Pages/StreetArt'
import Rooftop from './Pages/Rooftop'
import Sunset from './Pages/Sunset'
import Lights from './Pages/Lights'
import Location from './components/Location';

export default function App() {
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div>
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Map" component={Map} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route path="/Inspiration" component={Inspiration} />
        <Route path="/Profile/:userId" component={Profile} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Discover" component={Discover} />
        <Route path="/Architecture" component={Architecture} />
        <Route path="/Colourful" component={Colourful} />
        <Route path="/Greenery" component={Greenery} />
        <Route path="/Vibes" component={Vibes} />
        <Route path="/Tourist" component={Tourist} />
        <Route path="/StreetArt" component={StreetArt} />
        <Route path="/Rooftop" component={Rooftop} />
        <Route path="/Sunset" component={Sunset} />
        <Route path="/Lights" component={Lights} />
        <Route path="/Location" component={Location} />
        <Route component={Error} />
      </Switch>
      </Router>
    </div>
    <Footer />
    </div>
  );
}


