import "./index.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Image} from 'cloudinary-react';
import {UserContext} from '../../Contexts/UserContext';
import {useContext} from 'react';
import {useParams} from "react-router-dom";



function Profile() {
  
  const[data,setData] = useState();
  const [allPictures, setAllPictures] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [pics, setPics] = useState([]);

  const {userId} = useParams();
  // let tempData = {};

  const getProfileData = function(userId) {
    // const data = useContext(UserContext)
    console.log("getProfileData")
    if(!userId) {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/user",
      }).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } else {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/user/username/"+ userId,
      }).then((res) => {
        console.log(res.data);
        setData(res.data);
        // console.log(res.data)
        // return (res.data);
      });
    }

  } 

  const filterPictures = function(pics) {
    // console.log(pics);
    const filteredPics = pics.filter(picture => data && picture.author === data.username)
    console.log(filteredPics);
    setPics(filteredPics);
  }

  useEffect(() => { 
    console.log(userId)
    // if(!userId) return;
    // setData(useContext(UserContext));
    getProfileData(userId)
    // .then(userData => {
      // const userData = getProfileData(userId);
      // tempData = userData;
      // console.log(userData);
      // setData(userData);
    // });
    Axios("http://localhost:3001/photos")
    .then( function(response) {
      console.log(response.data);
      setAllPictures(response.data);
      // setFilteredData(response.data);
      
      // filterData(response.data);
    })
  },[userId])

  useEffect(()=> {
    filterPictures(allPictures)
  }, [data, allPictures])
  

  //--------------------------------------------------------  

  
 
  
  // useEffect(() => {
  //   Axios("http://localhost:3001/photos")
  //   .then((response) => {
  //     console.log(response.data);
  //     setAllData(response.data);
  //     setFilteredData(response.data);

  //     const filteredPics = filteredData.filter(picture => data && picture.author === data.username)
  //     console.log
  //     setPics(filteredPics);
  //   })
  //   .catch((error) => {
  //     console.log("Error getting data: " + error);
  //   });
  // }, []);


  //----------------------------------------------------------
  
  return (
    <div class="profile_layout">
      {!!data &&
    <div>
      {console.log("this is rendered")}
      {console.log(data)}
      <div className="userwrapper">
        <div className="profilephoto_wrapper">
          <Image className="profile_photo" cloudName="cyber_photos" publicId={data.publicId} />
        </div>
        <div class="profile-bio">
          <h3 class="handle-title">@{data.username}</h3>
           <p className="profile-title">Bio:<br/>{data.job}</p>
            <p class="location-title">London, UK</p>
        </div>
      </div>
      <h2 class="your-posts-title">Your Posts:</h2>
        <div className="userposts">
          { pics.map((value,index) => (
            <div key={index}>
              <Image className="cloud_photo" cloudName="cyber_photos" publicId={value.publicId} />
              {/* if=> value.author === data.username => diplay, else, dont */}
                <p class="photo-title">Taken in: {value.location}</p>
            
            </div>
        ))}
        </div>
        </div>
      }
      </div>
   );
}

export default Profile;
