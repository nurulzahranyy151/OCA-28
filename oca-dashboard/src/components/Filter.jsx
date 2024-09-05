import React, { useState } from 'react';

const Filter = () => {
  const [selectedDate, setSelectedDate] = useState('2024-08-25');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="filter-bar">
      <label>Filter By</label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <button onClick={() => console.log('Reset Filter')}>Reset Filter</button>
    </div>
  );
};

export default Filter;
