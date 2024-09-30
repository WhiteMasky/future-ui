import { Card, Col, Row } from 'antd';

const items = [
  { name: 'Cyber Katana', description: 'A futuristic blade.' },
  { name: 'Nano Shield', description: 'A high-tech defense tool.' },
];

function Inventory() {
  return (
      <div>
    <Row gutter={16}>
      {items.map((item, index) => (
        <Col span={12} key={index}>
          <Card
            title={item.name}
            className="transition-all duration-200"
            style={{
              backgroundColor: '#000', // 黑色背景
              border: '2px solid #4CAF50', // 霓虹绿色边框
              boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)', // 霓虹绿色阴影
              color: '#4CAF50', // 霓虹绿色文字
              fontFamily: '"Courier New", Courier, monospace', // 等宽字体
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // 过渡效果
            }}
            headStyle={{
              color: '#4CAF50', // 霓虹绿色标题文字
              borderBottom: '1px solid #4CAF50', // 霓虹绿色标题下边框
            }}
            hoverable
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时背景变为霓虹蓝色
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.7)'; // 悬停时蓝色阴影
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000'; // 恢复原始黑色背景
              e.currentTarget.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.5)'; // 恢复绿色阴影
            }}
          >
            {item.description}
          </Card>
        </Col>
      ))}
    </Row>
      </div>
  );
}

export default Inventory;
