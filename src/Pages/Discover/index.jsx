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
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.card,
      
    },
    
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  const classes = useStyles();
  return(
    <div className="discover_wrapper">
       <div class="discover_container">
         <input type="text" placeholder="Search Locations" onChange={(event) => searchTag(event)} />
           <div class="search"></div>
       </div>
       <p>&nbsp;</p>
       <p>&nbsp;</p>
       <p>&nbsp;</p>

    <div className={classes.root}>
      <GridList cellHeight={180} class="GridList">
        <GridListTile key="Subheader" cols={3} >
        </GridListTile>
        { filteredData.map((value,index) => (
          <GridListTile key={value.id}>
            <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
            <GridListTileBar
            title={value.location}
            actionIcon={
              <IconButton aria-label={`star`} className={classes.icon}>
              <StarBorderIcon />
            </IconButton>
            }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
    </div>
  )
}


