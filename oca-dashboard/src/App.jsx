import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

function App() {
  const chartData = {
    labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
    datasets: [
      {
        label: 'Total Tiket Masuk',
        data: [200, 300, 450, 700, 550, 400, 500, 600, 592, 580, 630],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>OCA</h2>
        <div className="menu-item">Insight</div>
        <div className="menu-item">Subordination</div>
      </div>

      {/* Main Dashboard */}
      <div className="App">
        <div className="dashboard-header">
          <h1>Dashboard Monitoring</h1>
          <div className="filter-bar">
            <select>
              <option>25 Aug 2024</option>
            </select>
            <select>
              <option>Order Type</option>
            </select>
            <select>
              <option>Order Status</option>
            </select>
            <button>Reset Filter</button>
          </div>
        </div>

        <div className="stat-overview">
          <div className="stat-card">
            <div className="stat-value">438</div>
            <div className="stat-label">Total Chat Masuk</div>
            <div className="stat-percentage">8.5% Up from yesterday</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">267</div>
            <div className="stat-label">Total Chat Selesai</div>
            <div className="stat-percentage">1.3% Up from last week</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">153</div>
            <div className="stat-label">Total Eskalasi</div>
            <div className="stat-percentage" style={{ color: 'red' }}>4.3% Down from yesterday</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">18</div>
            <div className="stat-label">Belum Diproses</div>
            <div className="stat-percentage">1.8% Up from yesterday</div>
          </div>
        </div>

        <div className="chart">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default App;
