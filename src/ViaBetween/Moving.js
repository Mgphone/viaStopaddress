import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import MyContext from "../Context/MyContext";
import Between from "./Between";

function Moving() {
  const { data, setData } = useContext(MyContext);

  useEffect(() => {
    console.log("Moving update" + JSON.stringify(data));
  }, [data]);

  const handleInputChange = (value, betweenId) => {
    const updatedAddresses = data.address.map((address) =>
      address.id === betweenId ? { ...address, location: value } : address
    );
    setData((prevValue) => ({ ...prevValue, address: updatedAddresses }));
  };

  const handleInputAddressChange = (value, betweenId) => {
    const updatedAddresses = data.address.map((address) =>
      address.id === betweenId
        ? { ...address, physicalAddress: value }
        : address
    );
    setData((prevValue) => ({ ...prevValue, address: updatedAddresses }));
  };

  const handleStairChange = (value, betweenId) => {
    const updatedAddresses = data.address.map((address) =>
      address.id === betweenId ? { ...address, selectedStair: value } : address
    );
    setData((prevValue) => ({ ...prevValue, address: updatedAddresses }));
  };

  const addBetween = () => {
    const uniqueId = uuidv4();
    setData((prevValue) => ({
      ...prevValue,
      address: [
        ...prevValue.address.slice(0, prevValue.address.length - 1),
        { id: uniqueId, location: "", physicalAddress: "", selectedStair: "" },
        ...prevValue.address.slice(-1),
      ],
    }));
  };

  const removeBetween = (removeId) => {
    const removeIndex = data.address.findIndex(
      (address) => address.id === removeId
    );

    if (removeIndex !== -1) {
      const updatedAddresses = [
        ...data.address.slice(0, removeIndex),
        ...data.address.slice(removeIndex + 1),
      ];
      setData((prevValue) => ({ ...prevValue, address: updatedAddresses }));
    }
  };

  const collection_location = data.address[0].location;
  const delivery_location = data.address[data.address.length - 1].location;
  // const

  return (
    <>
      <h1>Moving</h1>
      <div className="collection">
        <label htmlFor="collection">Collection</label>
        <input
          type="text"
          value={collection_location}
          readOnly
          // onChange={(e) =>
          //   handleInputChange(e.target.value, data.address[0].id)
          // }
        />
      </div>
      <div className="viaContainer">
        {data.address
          .slice(1, -1)
          .map(({ id, inputValue, inputAddress, selectedStair }, index) => (
            <div key={id} className={`viastop${index} viacontainer`}>
              <Between
                inputValue={inputValue}
                handleInputChange={(value) => handleInputChange(value, id)}
                inputAddress={inputAddress}
                handleInputAddressChange={(value) =>
                  handleInputAddressChange(value, id)
                }
                selectedStair={selectedStair}
                handleStairChange={(value) => handleStairChange(value, id)}
              />
              <button>Confirm</button>
              <button onClick={() => removeBetween(id)}>Remove Stop</button>
            </div>
          ))}
      </div>
      <button onClick={addBetween}>Add Stop</button>
      <div className="delivery">
        <label htmlFor="delivery">Delivery</label>
        <input
          value={delivery_location}
          // onChange={(e) =>
          //   handleInputChange(
          //     e.target.value,
          //     data.address[data.address.length - 1].id
          //   )
          // }
        />
      </div>
    </>
  );
}

export default Moving;
