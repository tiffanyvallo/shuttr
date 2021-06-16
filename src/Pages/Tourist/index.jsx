import "./index.css";

import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import {Image} from 'cloudinary-react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default function TitlebarGridList() {
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
   
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        </GridListTile>
        { pics.map((value,index) => (
          <GridListTile key={value.id}>
            <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
            <GridListTileBar
            title={value.location}
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
    
  )
}