import './index.css'
import {Image} from 'cloudinary-react';

export default function Location({name, hashtag, location, coordinates, lat, lng, caption, description, publicId}) {
 return (
   <div>
     <div class="location_wrapper">
      <div class="location_photo">Image<Image class="cloud_photo" cloudName="cyber_photos" publicId={publicId} /></div>
      <div class="location_map">Map</div>
      <div class="location_info"><p>{hashtag}</p><a href={`http://maps.google.com/maps?&z={10}&q=${coordinates.lat}+${coordinates.lng}`}>Link To Maps</a>
</div>
      </div>
   </div>
 )
}