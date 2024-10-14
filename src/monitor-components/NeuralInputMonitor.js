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
    <div
      style={{
        backgroundColor: '#121212', // 深色背景
        color: '#00FFFF', // 霓虹蓝色文字
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)', // 霓虹蓝色阴影
        fontFamily: '"Courier New", Courier, monospace', // 等宽字体
      }}
    >
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Neural Input Monitor
      </h2>
      <ResponsiveContainer width="100%" height={140}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" stroke="#333" /> {/* 深色网格线 */}
          <XAxis dataKey="time" stroke="#00FFFF" /> {/* 霓虹蓝色 X 轴 */}
          <YAxis stroke="#00FFFF" /> {/* 霓虹蓝色 Y 轴 */}
          <Tooltip contentStyle={{ backgroundColor: '#333', color: '#00FFFF' }} /> {/* 霓虹蓝色提示框 */}
          <Legend wrapperStyle={{ color: '#00FFFF' }} /> {/* 霓虹蓝色图例 */}
          <Line type="monotone" dataKey="brainWave" stroke="#FF4081" strokeWidth={3} /> {/* 霓虹粉色数据线 */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NeuralInputMonitor;
