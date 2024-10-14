import { Card } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import minimap from'../minimap.png';
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
      <img 
        src={minimap} 
        alt="Mini Map" 
        style={{
          width: '200px', 
          height: '200px', 
          objectFit: 'cover', // 确保图片适应容器大小
          borderRadius: '50%', // 将图片裁剪为圆形，模拟雷达图
          border: '2px solid #00FFFF', // 霓虹蓝色边框
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)' // 霓虹蓝色阴影
        }}
      />  
    </Card>
  );
}

export default MiniMap;

