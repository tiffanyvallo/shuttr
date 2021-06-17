import "./index.css";

import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Image} from 'cloudinary-react';
import { makeStyles } from '@material-ui/core/styles';

export default function Tourist() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/photos")
      .then((response) => {
        console.log(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const pics = filteredData.filter(picture => picture.hashtag === 'tourist')

  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.card,
      
    },
    gridList: {
      width: 1000,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const classes = useStyles();
  return(
    <div class="page">
    <div class="container" >
     
    { pics.map((value,index) => (
      <div class="card">
        <div class="face1">
        <div class="content" key={value.id}>
        <Image class="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
      </div>
      </div>
      <div class="face2">
        <div class="content">
  <p> <a href="/map">{value.location}</a> </p> 
   
      </div>
      </div>
       
      </div>
    ))}
</div>

</div>
    
  )
}