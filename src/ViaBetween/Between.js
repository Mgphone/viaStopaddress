import React from "react";
function Between(
  // ({ formData, setFormData })
  { onChange }
) {
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
    // setFormData((prevValue) => ({
    //   ...prevValue,
    //   location: e.target.value,
    // }));
  };
  // const handleStairChange = (e) => {
  //   setFormData((prevValue) => ({
  //     ...prevValue,
  //     stair: e.target.value,
  //   }));
  // };
  return (
    <>
      <label htmlFor="collection">Between</label>
      <input
        type="text"
        // value={formData.location}
        // value={e.target.value}
        onChange={handleInputChange}
        required
      />
      {/* <label htmlFor="stair">Stair</label>
      <select value={formData.stair} onChange={handleStairChange}>
        <option>Please Choose Stair</option>
        <option value={0}>NoStair</option>
        <option value={1}>No.1</option>
        <option value={2}>No.2</option>
        <option value={3}>No.3</option>
      </select> */}
    </>
  );
}
export default Between;
