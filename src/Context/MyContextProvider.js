import React, { useState } from "react";
import MyContext from "./MyContext";
function MyContextProvider({ children }) {
  const initialData = {
    address: [
      { id: 1, location: "London" },
      { id: 2, location: "NewCastle" },
    ],
  };
  const [data, setData] = useState(initialData);
  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        {children}
      </MyContext.Provider>
    </>
  );
}
export default MyContextProvider;
