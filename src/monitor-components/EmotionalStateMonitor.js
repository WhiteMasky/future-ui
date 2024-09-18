import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Relaxation', value: 40 },
  { name: 'Stress', value: 30 },
  { name: 'Focus', value: 30 },
];

const COLORS = ['#00FFFF', '#FF00FF', '#4CAF50']; // 赛博朋克色彩

const EmotionalStateMonitor = () => {
  return (
    <div
      style={{
        backgroundColor: '#000', // 黑色背景
        padding: '20px', // 内边距
        borderRadius: '12px', // 圆角边框
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', // 霓虹蓝色阴影
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
        Emotional State Monitor
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#111', // 工具提示背景色
              border: '1px solid #00FFFF', // 工具提示边框
              color: '#00FFFF', // 工具提示文字颜色
            }}
            itemStyle={{
              color: '#00FFFF', // 工具提示项颜色
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionalStateMonitor;
