import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { name: 'Fatigue', value: 65 },
  { name: 'Stress', value: 45 },
  { name: 'Cognitive Load', value: 30 },
];

const HealthMonitor = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Health Monitor</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={healthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthMonitor;
