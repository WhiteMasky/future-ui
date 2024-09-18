import { Card } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'Location', A: 120, B: 110, fullMark: 150 },
  { subject: 'Enemies', A: 98, B: 130, fullMark: 150 },
];

function MiniMap() {
  return (
    <Card
      title="Mini Map"
      className="p-4 shadow-xl"
      style={{
        backgroundColor: '#000', // 黑色背景
        border: '2px solid #4CAF50', // 霓虹绿色边框
        boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)', // 霓虹阴影效果
        color: '#4CAF50', // 霓虹绿色文字
        fontFamily: '"Courier New", Courier, monospace', // 等宽字体
      }}
      headStyle={{
        color: '#4CAF50', // 霓虹绿色标题
        borderBottom: '1px solid #4CAF50', // 霓虹绿色标题下边框
      }}
    >
      <RadarChart outerRadius={90} width={200} height={200} data={data}>
        <PolarGrid stroke="#4CAF50" /> {/* 霓虹绿色网格 */}
        <PolarAngleAxis dataKey="subject" stroke="#4CAF50" /> {/* 霓虹绿色轴线 */}
        <PolarRadiusAxis stroke="#4CAF50" /> {/* 霓虹绿色半径轴 */}
        <Radar
          name="Player"
          dataKey="A"
          stroke="#00FFFF" // 霓虹蓝色线条
          fill="#00FFFF" // 霓虹蓝色填充
          fillOpacity={0.6}
        />
      </RadarChart>
    </Card>
  );
}

export default MiniMap;
