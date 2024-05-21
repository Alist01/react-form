import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Email:</label>
      <input type="email" value={value} onChange={onChange} />
    </div>
  );
};

export default EmailInput;