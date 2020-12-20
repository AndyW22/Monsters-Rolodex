import React from 'react';

export default ({ placeholder, onChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={(e) => {
      onChange(e.target.value.toLowerCase());
    }}
  />
);
