import React, { useState } from 'react';
import { Slider, InputNumber, Button } from 'antd';
import { SketchPicker } from 'react-color'; // 用于选择颜色

const SettingsPanel = ({ onSettingsChange }) => {
  const [fontSize, setFontSize] = useState(16);
  const [themeColor, setThemeColor] = useState('#1DA57A');
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(50);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleFontSizeChange = (value) => {
    setFontSize(value);
    onSettingsChange({ fontSize: value, themeColor, brightness, volume });
  };

  const handleColorChange = (color) => {
    setThemeColor(color.hex);
    onSettingsChange({ fontSize, themeColor: color.hex, brightness, volume });
  };

  const handleBrightnessChange = (value) => {
    setBrightness(value);
    onSettingsChange({ fontSize, themeColor, brightness: value, volume });
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    onSettingsChange({ fontSize, themeColor, brightness, volume: value });
  };

  return (
    <div
      style={{
        backgroundColor: '#222', // 深色背景
        padding: '20px', // 内边距
        borderRadius: '12px', // 圆角边框
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)', // 霓虹蓝色阴影
        color: '#00FFFF', // 文字颜色
        fontFamily: '"Courier New", Courier, monospace', // 等宽字体
        maxWidth: '400px', // 最大宽度
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
        Game Settings
      </h2>

      {/* 字体大小控制 */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Font Size
        </label>
        <Slider
          min={12}
          max={24}
          value={fontSize}
          onChange={handleFontSizeChange}
          style={{ marginBottom: '8px' }}
        />
        <InputNumber
          min={12}
          max={24}
          value={fontSize}
          onChange={handleFontSizeChange}
          style={{ color: '#00FFFF', backgroundColor: '#333', border: 'none' }}
        />
      </div>

      {/* 颜色选择控制 */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Theme Color
        </label>
        <Button
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{
            backgroundColor: themeColor,
            borderColor: themeColor,
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          {displayColorPicker ? 'Close Color Picker' : 'Select Color'}
        </Button>
        {displayColorPicker && (
          <div style={{ marginTop: '10px' }}>
            <SketchPicker color={themeColor} onChange={handleColorChange} />
          </div>
        )}
      </div>

      {/* 亮度控制 */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Brightness
        </label>
        <Slider
          min={50}
          max={150}
          value={brightness}
          onChange={handleBrightnessChange}
          tooltip={{ formatter: (value) => `${value}%` }}
          style={{ marginBottom: '8px' }}
        />
      </div>

      {/* 音量控制 */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Volume
        </label>
        <Slider
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
          tooltip={{ formatter: (value) => `${value}%` }}
          style={{ marginBottom: '8px' }}
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
