import './index.css'
import {Image} from 'cloudinary-react';
import ModalMap from '../../components/ModalMap';
import { Link } from 'react-router-dom';
import React,{useContext} from 'react'

export default function Location({name, hashtag, location, coordinates, lat, lng, caption, description, publicId}) {
 return (
   <div>
     <h1 class="location-text">{location}</h1>
     <div class="location_wrapper">
      <div class="location_photo"><Image className="location-img" cloudName="cyber_photos" publicId={publicId} /></div>
      <div class="location_map">    
           <ModalMap lat={coordinates.lat} lng={coordinates.lng} /></div>
      <div class="location_info">
        <p class="location_description">Description:</p>
        <p class="location_description-text">{description}</p>
        <p>Tags: <span class="tags"> <Link to={`/${hashtag}`} className="index-button">#{hashtag}</Link></span></p><a target="_blank" rel="noopener noreferrer" href={`http://maps.google.com/maps?&z={10}&q=${coordinates.lat}+${coordinates.lng}`}>Link To Maps</a>
      </div>
      </div>
   </div>
 )
}