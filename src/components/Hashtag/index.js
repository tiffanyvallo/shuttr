import React from 'react';
import './index.css';

const Hashtag = ({ id, hashtag}) => {
  return (
    <div className="photo">
      <p className="photo-hashtag">Hashtag is: {hashtag}</p>
  
    </div>
  );
};

export default Hashtag;