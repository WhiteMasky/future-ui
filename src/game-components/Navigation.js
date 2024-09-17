import { Menu } from 'antd';

function Navigation() {
  return (
    <Menu mode="horizontal" className="bg-white text-neon-blue shadow-lg">
      <Menu.Item key="1">Character</Menu.Item>
      <Menu.Item key="2">Inventory</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
    </Menu>
  );
}

export default Navigation;
