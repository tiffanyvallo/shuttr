import React from 'react';
import './Index.css';

const Photo = ({ id, hashtag, src }) => {
  return (
    <div className="photo">
      <p className="photo-id">{id}</p>
      <p className="photo-hashtag">Hashtag is: {hashtag}</p>
      <img src={process.env.PUBLIC_URL + src} />
    </div>
  );
};

export default Photo;