// import { Menu } from 'antd';

// function Navigation() {
//   return (
//     <Menu mode="horizontal" className="bg-white text-neon-blue shadow-lg">
//       <Menu.Item key="1">Character</Menu.Item>
//       <Menu.Item key="2">Inventory</Menu.Item>
//       <Menu.Item key="3">Settings</Menu.Item>
//     </Menu>
//   );
// }

// export default Navigation;


// import { Menu } from 'antd';

// function Navigation() {
//   return (
//     <Menu
//       mode="horizontal"
//       className="shadow-lg"
//       style={{
//         backgroundColor: '#000', // 黑色背景
//         borderBottom: '2px solid #4CAF50', // 霓虹绿色底部边框
//         boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)', // 霓虹阴影
//       }}
//     >
//       <Menu.Item
//         key="1"
//         style={{
//           color: '#00FFFF', // 霓虹蓝色文字
//           fontFamily: '"Courier New", Courier, monospace', // 等宽字体
//           transition: 'color 0.3s ease, background-color 0.3s ease', // 平滑过渡
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
//           e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
//           e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
//         }}
//       >
//         Character
//       </Menu.Item>
//       <Menu.Item
//         key="2"
//         style={{
//           color: '#00FFFF', // 霓虹蓝色文字
//           fontFamily: '"Courier New", Courier, monospace',
//           transition: 'color 0.3s ease, background-color 0.3s ease',
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
//           e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
//           e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
//         }}
//       >
//         Inventory
//       </Menu.Item>
//       <Menu.Item
//         key="3"
//         style={{
//           color: '#00FFFF', // 霓虹蓝色文字
//           fontFamily: '"Courier New", Courier, monospace',
//           transition: 'color 0.3s ease, background-color 0.3s ease',
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
//           e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
//           e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
//         }}
//       >
//         Settings
//       </Menu.Item>
//     </Menu>
//   );
// }

// export default Navigation;


import { Menu } from 'antd';

function Navigation() {
  return (
    <Menu
      mode="horizontal"
      className="shadow-lg"
      style={{
        backgroundColor: '#000', // 黑色背景
        borderBottom: '2px solid #4CAF50', // 霓虹绿色底部边框
        boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)', // 霓虹阴影
      }}
    >
      <Menu.Item
        key="1"
        style={{
          color: '#00FFFF', // 霓虹蓝色文字
          fontFamily: '"Courier New", Courier, monospace', // 等宽字体
          transition: 'color 0.3s ease, background-color 0.3s ease', // 平滑过渡
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
            e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
          }
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
            e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
          }
        }}
      >
        Character
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{
          color: '#00FFFF', // 霓虹蓝色文字
          fontFamily: '"Courier New", Courier, monospace',
          transition: 'color 0.3s ease, background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
            e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
          }
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
            e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
          }
        }}
      >
        Inventory
      </Menu.Item>
      <Menu.Item
        key="3"
        style={{
          color: '#00FFFF', // 霓虹蓝色文字
          fontFamily: '"Courier New", Courier, monospace',
          transition: 'color 0.3s ease, background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#4CAF50'; // 悬停时霓虹绿色文字
            e.currentTarget.style.backgroundColor = '#001f3f'; // 悬停时霓虹蓝色背景
          }
        }}
        onMouseLeave={(e) => {
          if (e.currentTarget) {
            e.currentTarget.style.color = '#00FFFF'; // 恢复霓虹蓝色文字
            e.currentTarget.style.backgroundColor = '#000'; // 恢复黑色背景
          }
        }}
      >
        Settings
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
