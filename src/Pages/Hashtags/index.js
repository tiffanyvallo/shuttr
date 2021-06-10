
import './index.css';
import  Hashtag  from '../../components/Hashtag';
import  Photo  from '../../components/Photo';
import React, { useState } from "react";

function Hash() {
  const [hashtag, setHashtag] = useState("");

 
const HashtagsList = () => {
  // const [photos] = useHashtags();
  
}
const hashtagSearch = [{id:1, hashtag:"logo"}, {id:2, hashtag:"Test"} ]
  return (
    <div className="hashtag-list">
      <input placeholder="Search Hashtag" value={hashtag} onChange={(e) => setHashtag(e.target.value)}/>
      <button type="submit" onClick={HashtagsList}> Submit </button>
      
      {hashtagSearch.map((searchedhashtag) => {
        if(searchedhashtag == hashtag) {<Hashtag key={`${searchedhashtag.hashtag}`} {...searchedhashtag}/> 
      }}
        )}
    </div>
      )
}

export default Hash;
