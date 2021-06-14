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