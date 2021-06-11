import './index.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';


function HashtagsPage() {
const [hashtag, setHashtag] = useState([]);
const [filteredTag, setFilteredTag] = useState(hashtag)

const handleSearch = (e) =>{
let value = e.target.value.toLowerCase();
let result = []
console.log(value)
result = hashtag.filter((data) => {
  return data.title.search(value) !== -1;
});
setFilteredTag(result);
}

useEffect(() => {
axios ('https://jsonplaceholder.typicode.com/albums/1/photos')
.then (response => {
  console.log(response.data)
  setHashtag(response.data);
  setFilteredTag(response.data);
})
.catch(error => {
  console.log('Error getting fake data: ' + error);
})
}, []);
       return(
        <div className= "HashtagList" >
          <input placeholder="Search Hashtag" type="text" onChange={(e) => handleSearch(e)} />
          {filteredTag.map((value,index)=>{<div key={value.id}>{value.title}</div>})}
        </div>
       )
}

export default HashtagsPage;