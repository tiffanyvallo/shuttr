import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'
import './index.css'
import drone from './banner_dark.mp4';
import logo from './shuttrlogo.png'
import shuttrIphone from './shuttr_iphone.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import londonpub from './londonpub.jpg'

export default function Home() {
  return (
    <div class="home-wrapper">
      <div class="fullscrenvideo">
      {/* <div class="overlay"><img class="shuttrlogo" src={logo}></img></div> */}
      <video className='videoTag' autoPlay loop muted>
            <source src={drone} type='video/mp4' />
      </video>
      </div>
      <div class="cta-wrapper">
      <img class="shuttriphone" src={shuttrIphone}></img>
      <div class="text_home">
        <h2>  Find the best spots,</h2>
        <p>  
        See what you're missing out on in your city and discover more. 
        </p>  
      <p class="no-account" style={{color: 'white'}}>Don't have an account?</p>  
           
           <Button
               type="button"
               width='50%'
               variant="contained"
               color="primary"
               href="/signup"
               type="submit"
               style={{backgroundColor: '#51fbee', color: '#000000'}}
               >
               Sign up
           </Button>
      </div>

      </div>
      <div class="grid">
        <div class="grid-left">
        <img class="home-img-left" src={londonpub}></img>
        </div>
        <div class="grid-right">
        <h2>  Want to see more?</h2>
        <p style={{color: 'white'}}>  
        Join today and see your city like you've not seen it before.
        </p>  
           
           <Button
               type="button"
               width='50%'
               variant="contained"
               color="primary"
               href="/signup"
               type="submit"
               style={{backgroundColor: '#51fbee', color: '#000000'}}
               >
               Find Out More
           </Button>
        </div>
      </div>
    </div>
  //   <Player poster="/assets/poster.png" fluid={true} preload={"auto"} autoPlay={true}>
  //   <source src="./drone_london.mp4" />
  // </Player>
  );
}