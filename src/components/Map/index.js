import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Link } from 'react-router-dom';

function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <div>
       <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
    );
}

export default Map
