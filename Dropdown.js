// Dropdown.js
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownCountry = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
    <div>
      <label htmlFor="countries">Select a city:</label>
      <select id="countries" value={selectedOption} onChange={handleDropdownCountry}>
        <option value="">Select an option</option>
        <option value="India ">India </option>
        <option value="Pakistan">Pakistan</option>
        <option value="Bangladesh">Bangaladesh</option>
      </select>
      { <p>You selected: {selectedOption}</p>}
    </div>
    <div>
      <label htmlFor="cities">Select a city:</label>
      <select id="cities" value={selectedOption} onChange={handleDropdownCountry}>
        <option value="">Select an option</option>
        <option value="Bangalore">Bangalore </option>
        <option value="Mysore">Msyore</option>
        <option value="Dharwad">Dharwad</option>
      </select>
      { <p>You selected: {selectedOption}</p>}
    </div>
    </>
  );
};

export default Dropdown;


