import React, { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

const placesLibrary = ["places"];

function Testing({ inputValue }) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [searchResult, setSearchResult] = useState("");
  const [error, setError] = useState(false);
  const [outPutValue, setOutPutValue] = useState(false);
  const searchOptions = {
    componentRestrictions: { country: ["uk"] },
    types: ["city"],
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: placesLibrary,
    searchOptions: { searchOptions },
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      const name = place.name;
      const status = place.business_status;
      const formattedAddress = place.formatted_address;
      if (formattedAddress === "undefined") {
        setError(true);
      } else {
        setOutPutValue(formattedAddress);
      }
      console.log(`Name: ${name}`);
      console.log(`Business Status: ${status}`);
      console.log(`Formatted Address: ${formattedAddress}`);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div id="searchColumn">
        <h2>Tide Forecast Options</h2>
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <input
            type="text"
            placeholder="Search for Tide Information"
            value={inputValue}
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </Autocomplete>
        {error && <p>{outPutValue}</p>}
      </div>
    </div>
  );
}

export default Testing;
