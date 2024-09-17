import { Card } from 'antd';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  { name: 'HP', value: 90, fill: '#8884d8' },
  { name: 'Energy', value: 75, fill: '#83a6ed' },
];

function CharacterStatus() {
  return (
    <Card title="Character Status" className="bg-black text-neon-green p-4 shadow-xl">
      <RadialBarChart width={150} height={150} cx={75} cy={75} innerRadius={20} outerRadius={100} barSize={10} data={data}>
        <RadialBar minAngle={15} background clockWise dataKey="value" />
        <Legend />
      </RadialBarChart>
    </Card>
  );
}

export default CharacterStatus;
