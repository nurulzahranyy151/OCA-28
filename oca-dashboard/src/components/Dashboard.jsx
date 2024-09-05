import React from 'react';
import ChatStatistic from './ChatStatistics.jsx';
import TicketsGraph from './TicketsGraph.jsx';
import Filter from './Filter';

const Dashboard = ({ data }) => {
  return (
    <div>
      <Filter />
      <div className="stats-overview">
        <ChatStatistic label="Total Chat Masuk" value={data.totalChatMasuk} />
        <ChatStatistic label="Total Chat Selesai" value={data.totalChatSelesai} />
        <ChatStatistic label="Total Eskalasi" value={data.totalEskalasi} />
        <ChatStatistic label="Belum Diproses" value={data.belumDiproses} />
      </div>
      <TicketsGraph ticketsData={data.totalTiketMasuk} />
    </div>
  );
};

export default Dashboard;
