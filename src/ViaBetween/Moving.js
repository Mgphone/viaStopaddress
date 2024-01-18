import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../Context/MyContext";
import Between from "./Between";

function Moving() {
  const { data, setData } = useContext(MyContext);
  const [formData, setFormData] = useState({ location: "", stair: 0 });

  useEffect(() => {
    console.log("Moving update" + JSON.stringify(data));
  });

  const addBetween = () => {
    const uniqueId = uuidv4();

    // Add a new address with the unique ID between the first and last addresses
    setData((prevValue) => ({
      ...prevValue,
      address: [
        ...prevValue.address.slice(0, prevValue.address.length - 1),
        { id: uniqueId, location: "" },
        ...prevValue.address.slice(-1),
      ],
    }));
  };
  const removeBetween = (removeId) => {
    // Find the index of the address with the given removeId
    const removeIndex = data.address.findIndex(
      (address) => address.id === removeId
    );

    if (removeIndex !== -1) {
      // Create a new array without the address to be removed
      const updatedAddresses = [
        ...data.address.slice(0, removeIndex),
        ...data.address.slice(removeIndex + 1),
      ];

      // Update the global context with the new addresses
      setData((prevValue) => ({
        ...prevValue,
        address: updatedAddresses,
      }));
    }
  };

  const handleChange = (e, betweenId) => {
    // Update the location of the address with the given betweenId
    const updatedAddresses = data.address.map((address) =>
      address.id === betweenId ? { ...address, location: e } : address
    );

    // Update the global context with the new addresses
    setData((prevValue) => ({
      ...prevValue,
      address: updatedAddresses,
    }));
  };

  // const handleChange = (e, betweenId) => {
  //   setFormData((prevValue) => ({
  //     ...prevValue,
  //     location: e.target.value,
  //   }));

  //   const updatedAddresses = data.address.map((address) =>
  //     address.id === betweenId
  //       ? { ...address, location: e.target.value, stair: formData.stair }
  //       : address
  //   );

  //   setData((prevValue) => ({
  //     ...prevValue,
  //     address: updatedAddresses,
  //   }));
  // };

  const collection = data.address[0].location;
  const delivery = data.address[data.address.length - 1].location;
  console.log("This is formData" + JSON.stringify(formData));
  return (
    <>
      <h1>Moving</h1>
      <div className="collection">
        <label htmlFor="collection">Collection</label>
        <input value={collection} />
      </div>
      <button onClick={addBetween}>Add Button</button>
      <div className="viaContainer">
        {data.address.slice(1, -1).map(({ id, location }, index) => (
          <div key={id} className={`viastop${index} viacontainer`}>
            <Between
              key={id}
              value={location}
              onChange={(e) => handleChange(e, id)}
              // formData={formData}
              // setFormData={setFormData}
            />
            <button onClick={() => removeBetween(id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="delivery">
        <label htmlFor="collection">Delivery</label>
        <input value={delivery} />
      </div>
    </>
  );
}

export default Moving;
