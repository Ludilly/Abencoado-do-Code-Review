import React from 'react';

const Input = ({ name, label, onChange, value }) => (
  <label htmlFor={ name }>
    { label }
    <input
      name={ name }
      onChange={ onChange }
      value={ value }
    />
  </label>
);

export default Input;
