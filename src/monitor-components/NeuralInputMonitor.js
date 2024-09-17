import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NeuralInputMonitor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 模拟实时数据更新
    const interval = setInterval(() => {
      setData(prevData => [
        ...prevData.slice(-20), // 保留最后20个数据点
        {
          time: new Date().toLocaleTimeString(),
          brainWave: Math.random() * 100,  // 模拟脑波数据
        }
      ]);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Neural Input Monitor</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="brainWave" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NeuralInputMonitor;
