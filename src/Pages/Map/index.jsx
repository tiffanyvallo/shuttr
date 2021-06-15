import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import axios from "axios";
import {Image} from 'cloudinary-react';


function Map() {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 51.5074,
    longitude: 0.1278,
    zoom: 10
  });

  return (
    <div>
       <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/ajmccor/ckpttmayl2xwn18pg496rt567"
    >   

        <div>
        { allData.map((value,index) => { 
          return (
            <div key={value.id}>
             
             <Marker 
                latitude={(value.coordinates || {lat: 0}).lat}
                longitude={(value.coordinates || {lng: 0}).lng}
                offsetLeft={-20} 
                offsetTop={-10}>

                <Room style={{fontSize:viewport.zoom * 4, color:"orangeRed"}}/>
        
              </Marker>
             {/* <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} /> */}
            </div>
          );
         })}
        </div>

      <Marker latitude={51.50930532431084}
              longitude={-0.12829965320115588}
              offsetLeft={-20} 
              offsetTop={-10}>

        <Room style={{fontSize:viewport.zoom * 4, color:"orangeRed"}}/>
        
      </Marker>

      {/* <Popup
          latitude={51.50930532431084}
          longitude={-0.12829965320115588}
          closeButton={true}
          closeOnClick={true}
          sortByDepth={true}
          anchor="bottom" >
            
          <div className="card">
            <h4 className="place">London</h4>
          </div>
        </Popup> */}
      
    </ReactMapGL>
    </div>
    );
}

export default Map
