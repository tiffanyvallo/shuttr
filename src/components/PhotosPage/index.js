import React from 'react';
import './index.css';
import  Photo  from '../Photo/index';

const PhotosList = () => {
  // const [photos] = usePhotos();
  const photos = [{id:1, hashtag:"logo", src: "/logo192.png" }, {id:2, hashtag:"Test", src: "/logo512.png" } ]
  return (
    <div className="photos-list">
      {photos.map((photo) => (
        <Photo key={`${photo.id}`} {...photo}/>
      ))}
    </div>
  );
}
export default PhotosList;
