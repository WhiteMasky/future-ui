import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { name: 'Fatigue', value: 65 },
  { name: 'Stress', value: 45 },
  { name: 'Cognitive Load', value: 30 },
];

const HealthMonitor = () => {
  return (
    <div
      style={{
        backgroundColor: '#111', // 深色背景
        padding: '20px', // 内边距
        borderRadius: '12px', // 圆角边框
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)', // 霓虹蓝色阴影
        color: '#00FFFF', // 文字颜色
        fontFamily: '"Courier New", Courier, monospace', // 等宽字体
      }}
    >
      <h2
        style={{
          fontSize: '1.5rem', // 标题大小
          fontWeight: 'bold', // 粗体
          marginBottom: '20px', // 底部外边距
          textShadow: '0 0 10px rgba(0, 255, 255, 0.7)', // 霓虹标题阴影
        }}
      >
        Health Monitor
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={healthData}>
          <CartesianGrid stroke="#333" strokeDasharray="5 5" /> {/* 深色网格线 */}
          <XAxis 
            dataKey="name" 
            stroke="#00FFFF" // X轴文字颜色
            tick={{ fontSize: 12 }} // X轴文字大小
          />
          <YAxis 
            stroke="#00FFFF" // Y轴文字颜色
            tick={{ fontSize: 12 }} // Y轴文字大小
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111', // 工具提示背景色
              border: '1px solid #00FFFF', // 工具提示边框
              color: '#00FFFF', // 工具提示文字颜色
            }}
          />
          <Bar
            dataKey="value"
            fill="#FF00FF" // 霓虹粉色柱子
            barSize={30} // 柱子宽度
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthMonitor;
