import React from 'react';

function Filter({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="notCompleted">Not Completed</option>
    </select>
  );
}

export default Filter;
