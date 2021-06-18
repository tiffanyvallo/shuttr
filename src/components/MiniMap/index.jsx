import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import axios from "axios";
import {Image} from 'cloudinary-react';


function MiniMap({lat, lng}) {
  const [photos,setPhotos] = useState([]);
  const [allData, setAllData] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);

  const [viewport, setViewport] = useState({
    width: "20vw",
    height: "20vw",
    latitude: lat,
    longitude: lng,
    zoom: 13
  });

  return (
    <div>
       <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ajmccor/ckpttmayl2xwn18pg496rt567"
    >   

        <Marker 
                latitude={lat}
                longitude={lng}
                offsetLeft={-20} 
                offsetTop={-10}>

                <Room style={{fontSize:viewport.zoom * 4, color:"orangeRed"}}/>
        
              </Marker>
      
    </ReactMapGL>
    </div>
    );
}

export default MiniMap
