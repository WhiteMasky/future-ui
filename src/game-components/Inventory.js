import { Card, Col, Row } from 'antd';

const items = [
  { name: 'Cyber Katana', description: 'A futuristic blade.' },
  { name: 'Nano Shield', description: 'A high-tech defense tool.' },
];

function Inventory() {
  return (
    <Row gutter={16}>
      {items.map((item, index) => (
        <Col span={8} key={index}>
          <Card title={item.name} className="bg-white text-black hover:bg-neon-blue transition-all duration-200">
            {item.description}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Inventory;
