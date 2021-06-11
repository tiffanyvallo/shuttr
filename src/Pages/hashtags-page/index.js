import './index.css';

import React, { useState, useEffect } from "react";
import axios from 'axios';


function HashtagsPage() {
const [hashtag, setHashtag] = useState([]);
const [filteredTag, setFilteredTag] = useState(hashtag)

const handleSearch = (e) =>{
let value = e.target.value.toLowerCase();
let result = []
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



  
 <div className= "HashtagList" >
   <div style={{ margin: '0 auto', marginTop: '10%'}}>
     <input placeholder="Search Hashtag" type="text" onChange={(e) => handleSearch(e)} />
   </div>
   <div style={{padding:10}}>
     {filteredTag.map((value,index)=>{
       const styles = {
        display:'inline',
        width:'30%',
        height:50,
        float:'left',
        padding:5,
        border:'0.5px solid black',
        marginBottom:10,
        marginRight:10
        }
       return(
         <div key={value.id}>
           <div style={styles}>
             {value.title}
             </div>
             </div>
       )
     })}
   </div>
 </div>
}

export default HashtagsPage;