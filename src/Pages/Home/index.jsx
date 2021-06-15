import React, { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'
import './index.css'

import {
  Player,
} from 'video-react';

export default function Home() {
  return (
    <div class="home-wrapper">
      <div class="fullscrenvideo"></div>
      <div class="cta-wrapper"></div>
      <div class="grid">
        <div class="grid-left"></div>
        <div class="grid-right"></div>
      </div>
    </div>
  //   <Player poster="/assets/poster.png" fluid={true} preload={"auto"} autoPlay={true}>
  //   <source src="./drone_london.mp4" />
  // </Player>
  );
}