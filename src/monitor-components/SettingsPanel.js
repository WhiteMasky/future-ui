import React, { useState } from 'react';
import { Slider, InputNumber, Select, Button } from 'antd';
import { SketchPicker } from 'react-color'; // 用于选择颜色

const { Option } = Select;

const SettingsPanel = ({ onSettingsChange }) => {
  // 状态管理字体大小、颜色、亮度、音量等设置
  const [fontSize, setFontSize] = useState(16);
  const [themeColor, setThemeColor] = useState('#1DA57A');
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(50);

  // 颜色选择器状态
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
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Game Settings</h2>

      {/* 字体大小控制 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Font Size</label>
        <Slider
          min={12}
          max={24}
          value={fontSize}
          onChange={handleFontSizeChange}
        />
        <InputNumber
          min={12}
          max={24}
          value={fontSize}
          onChange={handleFontSizeChange}
          className="ml-2"
        />
      </div>

      {/* 颜色选择控制 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Theme Color</label>
        <Button onClick={() => setDisplayColorPicker(!displayColorPicker)}>
          {displayColorPicker ? 'Close Color Picker' : 'Select Color'}
        </Button>
        {displayColorPicker && (
          <div className="mt-2">
            <SketchPicker color={themeColor} onChange={handleColorChange} />
          </div>
        )}
      </div>

      {/* 亮度控制 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Brightness</label>
        <Slider
          min={50}
          max={150}
          value={brightness}
          onChange={handleBrightnessChange}
          tooltip={{ formatter: (value) => `${value}%` }}
        />
      </div>

      {/* 音量控制 */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Volume</label>
        <Slider
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
          tooltip={{ formatter: (value) => `${value}%` }}
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
