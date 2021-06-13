import "./index.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {Image} from 'cloudinary-react';

function HashtagsPage() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchTag = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      
      return data.hashtag.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios("http://localhost:3001/photos")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);
  const styles = {
    display: "inline",
    width: "30%",
    height: 50,
    float: "left",
    padding: 5,
    border: "0.5px solid black",
    marginBottom: 10,
    marginRight: 10,
  };
  return (
    <div className="App">
      <div style={{ margin: "0 auto", marginTop: "10%" }}>
        <label>Search:</label>
        <input type="text" onChange={(event) => searchTag(event)} />
      </div>
       <div style={{ padding: 10 }}>
        { filteredData.map((value,index) => { 
          return (
            <div style={styles} key={value.id}>
             {value.hashtag}
             <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
            </div>
          );
         })}
        </div>
  </div>
   );
}

export default HashtagsPage;
