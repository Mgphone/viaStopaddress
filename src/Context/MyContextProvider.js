import React, { useState } from "react";
import MyContext from "./MyContext";
function MyContextProvider({ children }) {
  const initialData = {
    address: [
      { id: 1, location: "London", physicalAddress: "No.10", selectedStair: 0 },
      {
        id: 2,
        location: "NewCastle",
        physicalAddress: "No.22",
        selectedStair: 5,
      },
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
