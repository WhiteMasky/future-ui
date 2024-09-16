import React, { useState } from 'react';
import { Slider, Switch, Card } from 'antd';

const ControlPanel = () => {
  const [sensitivity, setSensitivity] = useState(50);
  const [isRealTime, setIsRealTime] = useState(true);

  return (
    <Card title="Control Panel" style={{ width: 300 }}>
      <p>Sensitivity: {sensitivity}</p>
      <Slider
        min={0}
        max={100}
        onChange={setSensitivity}
        value={sensitivity}
      />
      <p>Real-time Data</p>
      <Switch
        checked={isRealTime}
        onChange={(checked) => setIsRealTime(checked)}
      />
    </Card>
  );
};

export default ControlPanel;
