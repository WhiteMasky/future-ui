import React from 'react';
import { Progress, Card } from 'antd';

const RealTimeFeedback = ({ data }) => {
  return (
    <Card title="Real-Time Feedback" style={{ width:200, height:120 }}>
      <p>Brainwave Activity</p>
      <Progress percent={data} />
    </Card>
  );
};

export default RealTimeFeedback;
