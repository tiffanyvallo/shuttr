// import { render } from 'ejs'
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// mapboxgl.accessToken = 'pk.eyJ1IjoicGhpbGVlZXAiLCJhIjoiY2twdmVyazkxMTNkczJ3bzE5Y2o0bnp4ZSJ9.b5zCGkElIzhpNZH78VIVnw';

// export default function MiniMap(){
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [lng, lat],
//     zoom: zoom
//     });
//     });

//   var marker = new mapboxgl.Marker()
//   .setLngLat([-0.22469,  51.5051913])
//   .addTo(map);
//   render(
//     <div ref={mapContainer} className="map-container" />
//   )
// }

import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from "@material-ui/icons"
import { Link } from 'react-router-dom';
import axios from "axios";
import {Image} from 'cloudinary-react';

const MiniMap = ({lat,lon}) => {
    const [photos,setPhotos] = useState([]);
    const [allData, setAllData] = useState([]);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
  
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
  
    const handleMarkerClick = (id) => {
      setCurrentPlaceId(id)
    }
  
    const [viewport, setViewport] = useState({
      width: "400",
      height: "400",
      latitude: 51.5074,
      longitude: 0.1278,
      zoom: 8
    });
  
    return (
      <div>
        <p>hello</p>
         <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ajmccor/ckq0xqybt3fsf18rltfgs0y5t"
      >   
         
               <Marker 
                  latitude={lat}
                  longitude={lon}
                  offsetLeft={-20} 
                  offsetTop={-10}>
  
                  <Room style={{fontSize:viewport.zoom * 4, color:"orangeRed"}}
                  />
          
                </Marker>
        
      </ReactMapGL>
      </div>
      );
  }
  
  export default MiniMap