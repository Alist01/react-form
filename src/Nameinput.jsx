import React from 'react';

const NameInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default NameInput;