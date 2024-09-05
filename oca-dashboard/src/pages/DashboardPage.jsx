import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ChatStatistics from '../components/ChatStatistics';
import TicketsGraph from '../components/TicketsGraph';
import Filter from '../components/Filter';
import dummyData from '../data/dummyData';

const DashboardPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <Filter />
      <div className="dashboard-content">
        <ChatStatistics data={data?.chatStatistics} />
        <TicketsGraph data={data?.tickets} />
      </div>
    </div>
  );
};

export default DashboardPage;
