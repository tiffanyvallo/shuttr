import React, { useState, createContext, useEffect } from "react";

import Axios from "axios";

// This will hold the context
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [data, setData] = useState();

  // Fetch Method to get the data
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;