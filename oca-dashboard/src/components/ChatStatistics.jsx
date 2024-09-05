import React from 'react';

const ChatStatistic = ({ label, value }) => {
  return (
    <div className="stat-card">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default ChatStatistic;
