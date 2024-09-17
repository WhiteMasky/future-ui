import { Card } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'Location', A: 120, B: 110, fullMark: 150 },
  { subject: 'Enemies', A: 98, B: 130, fullMark: 150 },
];

function MiniMap() {
  return (
    <Card title="Mini Map" className="bg-white text-neon-yellow">
      <RadarChart outerRadius={90} width={200} height={200} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Player" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </Card>
  );
}

export default MiniMap;
