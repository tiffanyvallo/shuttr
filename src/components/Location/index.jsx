import './index.css'
import {Image} from 'cloudinary-react';
import ModalMap from '../../components/ModalMap';

export default function Location({name, hashtag, location, coordinates, lat, lng, caption, description, publicId}) {
 return (
   <div>
     <h1 class="location-text">{location}</h1>
     <div class="location_wrapper">
      <div class="location_photo"><Image class="cloud_photo" cloudName="cyber_photos" publicId={publicId} /></div>
      <div class="location_map">    
           <ModalMap lat={coordinates.lat} lng={coordinates.lng} /></div>
      <div class="location_info">
        <p>Description:</p>
        <p>{description}</p>
        <p>#{hashtag}</p><a href={`http://maps.google.com/maps?&z={10}&q=${coordinates.lat}+${coordinates.lng}`}>Link To Maps</a>
      </div>
      </div>
   </div>
 )
}