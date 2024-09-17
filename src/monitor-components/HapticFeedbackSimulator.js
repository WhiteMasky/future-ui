import React, { useState } from 'react';
import { Slider } from 'antd';

const HapticFeedbackSimulator = () => {
  const [intensity, setIntensity] = useState(50);

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Haptic Feedback Simulator</h2>
      <Slider
        min={0}
        max={100}
        value={intensity}
        onChange={(value) => setIntensity(value)}
      />
      <p className="mt-2">Current Haptic Intensity: {intensity}</p>
    </div>
  );
};

export default HapticFeedbackSimulator;
