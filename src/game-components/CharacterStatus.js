import { Card } from 'antd';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  { name: 'HP', value: 60, fill: '#4CAF50' }, // 霓虹绿色
  { name: 'Energy', value: 35, fill: '#83a6ed' }, // 额外颜色可以保留蓝色
];

function CharacterStatus() {
  return (
    <Card 
      title="Character Status" 
      className="p-4 shadow-xl" 
      style={{
        backgroundColor: '#000', // 黑色背景
        border: '2px solid #4CAF50', // 霓虹绿色边框
        boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)', // 霓虹阴影效果
        color: '#4CAF50' // 霓虹绿色文字
      }}
      headStyle={{
        backgroundColor: '#000', // 黑色标题背景
        borderBottom: '1px solid #4CAF50', // 标题下边框
        color: '#4CAF50', // 标题文字颜色
      }}
    >
      <RadialBarChart width={150} height={150} cx={75} cy={75} innerRadius={20} outerRadius={100} barSize={10} data={data}>
        <RadialBar minAngle={15} background clockWise dataKey="value" />
        <Legend 
          wrapperStyle={{
            color: '#4CAF50', // 霓虹绿色的图例文字
            fontFamily: '"Courier New", Courier, monospace', // 复古等宽字体
          }} 
        />
      </RadialBarChart>
    </Card>
  );
}

export default CharacterStatus;
