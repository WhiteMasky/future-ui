import React, { useState } from 'react';
import { Slider } from 'antd';

const HapticFeedbackSimulator = () => {
  const [intensity, setIntensity] = useState(50);

  return (
    <div
      style={{
        backgroundColor: '#111', // 深色背景
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
        Haptic Feedback Simulator
      </h2>
      <Slider
        min={0}
        max={100}
        value={intensity}
        onChange={(value) => setIntensity(value)}
        style={{
          color: '#00FFFF', // 滑块颜色
          marginBottom: '10px', // 滑块底部间距
        }}
      />
      <p
        style={{
          fontSize: '1rem', // 字体大小
          color: '#00FFFF', // 文字颜色
          textShadow: '0 0 5px rgba(0, 255, 255, 0.5)', // 文字阴影
        }}
      >
        Current Haptic Intensity: {intensity}
      </p>
    </div>
  );
};

export default HapticFeedbackSimulator;
