import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

function Between({
  inputValue,
  handleInputChange,
  inputAddress,
  handleInputAddressChange,
  selectedStair,
  handleStairChange,
}) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const searchOptions = {
    componentRestrictions: { country: ["uk"] },
    types: ["city"],
  };
  return (
    <>
      <label htmlFor="collection" className="between">
        Via
      </label>
      <ReactGoogleAutocomplete
        id="locationInput"
        // types={["(regions)"]}
        // componentRestrictions={{ country: "uk" }}
        searchOptions={searchOptions}
        apiKey={apiKey}
        onPlaceSelected={(place) => handleInputChange(place.formatted_address)}
        placeholder="Enter location"
        value={inputAddress}
        // style={{
        //   boxSizing: "border-box",
        //   border: "1px solid transparent",
        //   width: "240px",
        //   height: "32px",
        //   padding: "0 12px",
        //   borderRadius: "3px",
        //   boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
        //   fontSize: "14px",
        //   outline: "none",
        //   textOverflow: "ellipses",
        // }}
      />
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        required
      /> */}

      <label htmlFor="address">Physical Address</label>
      <input
        type="text"
        value={inputAddress}
        onChange={(e) => handleInputAddressChange(e.target.value)}
        required
      />
      <select
        value={selectedStair}
        onChange={(e) => handleStairChange(e.target.value)}
      >
        <option value={-1}>Please Choose From the List</option>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </>
  );
}
export default Between;
