import React from "react";
function Between({
  inputValue,
  handleInputChange,
  inputAddress,
  handleInputAddressChange,
  selectedStair,
  handleStairChange,
}) {
  // const handleInputChange = (e) => {
  //   if (onChange) {
  //     onChange(e.target.value);
  //   }
  // };

  return (
    <>
      <label htmlFor="collection" className="between">
        Via
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        required
      />
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
