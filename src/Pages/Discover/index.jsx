import "./index.css";

import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Image} from 'cloudinary-react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export default function TitlebarGridList() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  

  const searchTag = (event) => {
    
    let userInput = event.target.value;
    let value = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      
      return data.location.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios("http://localhost:3001/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.card,
      padding: 0,
    },
    gridList: {
      width: '95%',
      height: 450,
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: '#d9b08c',
    },
  }));


  return(
    <div className="discover_wrapper">
       <div class="discover_container">
         <input type="text" placeholder="Search Locations" onChange={(event) => searchTag(event)} />
           <div class="search"></div>
       </div>
       <p>&nbsp;</p>
       <p>&nbsp;</p>
       <div class="container">
    
        { filteredData.map((value,index) => (
          <div class="card">
            <div class="face1">
            <div class="content" key={value.id}>
            <Image class="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
          </div>
          </div>
          <div class="face2">
            <div class="content">
         <p>{value.hashtag}</p> 
          <a href="/profile">More Info</a>
          {/* actionIcon={
              <IconButton aria-label={`star`} className={classes.icon}>
                {/* {need to add a onClick={() => savedPhoto()}} }
              <StarBorderIcon />
            </IconButton>
            } */}
            <button>Save</button>
          </div>
          </div>
           
          </div>
        ))}
     

    
    </div>
    </div>
  )
}


