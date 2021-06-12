import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Link } from 'react-router-dom';

function Map() {
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
    />
    </div>
    );
}

export default Map
