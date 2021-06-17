import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'
import './index.css'
import drone from './banner_dark.mp4';
import logo from './shuttrlogo.png'

export default function Home() {
  return (
    <div class="home-wrapper">
      <div class="fullscrenvideo">
      <div class="overlay"><img class="shuttrlogo" src={logo}></img></div>
      <video className='videoTag' autoPlay loop muted>
            <source src={drone} type='video/mp4' />
      </video>
      </div>
      <div class="cta-wrapper"></div>
      <div class="grid">
        <div class="grid-right">
        </div>
      </div>
    </div>
  //   <Player poster="/assets/poster.png" fluid={true} preload={"auto"} autoPlay={true}>
  //   <source src="./drone_london.mp4" />
  // </Player>
  );
}