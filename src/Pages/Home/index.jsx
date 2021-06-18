import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'
import './index.css'
import drone from './banner_dark.mp4';
import logo from './shuttrlogo.png'
import shuttrIphone from './shuttr_iphone.png'

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


      </div>
      <div class="grid">
        <div class="grid-left">
          <p>Hey this is the CTA FORM LOOK HOW COOL OUR SITE IS</p>
        </div>
        <div class="grid-right">
        <p>Put a tiny image here for nice cool styles</p>
        </div>
      </div>
    </div>
  //   <Player poster="/assets/poster.png" fluid={true} preload={"auto"} autoPlay={true}>
  //   <source src="./drone_london.mp4" />
  // </Player>
  );
}