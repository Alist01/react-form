import React from 'react';

const PhoneInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Phone:</label>
      <input type="tel" value={value} onChange={onChange} />
    </div>
  );
};

export default PhoneInput;