// import React from 'react';
// import { Card } from 'antd';
// import { EyeOutlined, InteractionOutlined } from '@ant-design/icons';

// const VRInterface = () => {
//   return (
//     <div className="bg-white p-4 shadow-lg rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">VR/AR Interface</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <Card title="Virtual Environment" hoverable>
//           <EyeOutlined style={{ fontSize: '24px' }} />
//           <p className="mt-2">View VR World</p>
//         </Card>
//         <Card title="Interaction Mode" hoverable>
//           <InteractionOutlined style={{ fontSize: '24px' }} />
//           <p className="mt-2">Engage with Objects</p>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default VRInterface;


// // VRARInterface.jsx
// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import 'tailwindcss/tailwind.css';

// const VRARInterface = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className="p-4">
//       <Button type="primary" onClick={() => setVisible(true)}>
//         VR Start
//       </Button>
//       <Modal
//         title="虚拟现实"
//         visible={visible}
//         onCancel={() => setVisible(false)}
//         footer={null}
//       >
//         <p>Show VR content</p>
//       </Modal>
//       <Button type="primary" onClick={() => setVisible(true)}>
//         AR Start
//       </Button>
//       <Modal
//         title="增强现实环境"
//         visible={visible}
//         onCancel={() => setVisible(false)}
//         footer={null}
//       >
//         <p>Show AR content</p>
//       </Modal>
//     </div>
//   );
// };

// export default VRARInterface;



import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import 'tailwindcss/tailwind.css';

const VRARInterface = () => {
  const [visible, setVisible] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const showModal = (type) => {
    setCurrentModal(type);
    setVisible(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#111', // 深色背景
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)', // 霓虹蓝色阴影
        color: '#00FFFF', // 文字颜色
        fontFamily: '"Courier New", Courier, monospace', // 等宽字体
      }}
    >
      <Button
        type="primary"
        style={{
          backgroundColor: '#4CAF50', // 霓虹绿色背景
          borderColor: '#4CAF50',
          color: '#000',
          boxShadow: '0 0 10px rgba(76, 175, 80, 0.7)', // 霓虹绿色阴影
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
        onClick={() => showModal('VR')}
      >
        VR Start
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: '#FF4081', // 霓虹粉色背景
          borderColor: '#FF4081',
          color: '#000',
          boxShadow: '0 0 10px rgba(255, 64, 129, 0.7)', // 霓虹粉色阴影
          fontWeight: 'bold',
        }}
        onClick={() => showModal('AR')}
      >
        AR Start
      </Button>

      {/* VR 模态框 */}
      <Modal
        title="虚拟现实"
        visible={visible && currentModal === 'VR'}
        onCancel={() => setVisible(false)}
        footer={null}
        bodyStyle={{ backgroundColor: '#333', color: '#00FFFF', fontFamily: '"Courier New", Courier, monospace' }}
        style={{ borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
      >
        <p>Show VR content</p>
      </Modal>

      {/* AR 模态框 */}
      <Modal
        title="增强现实环境"
        visible={visible && currentModal === 'AR'}
        onCancel={() => setVisible(false)}
        footer={null}
        bodyStyle={{ backgroundColor: '#333', color: '#00FFFF', fontFamily: '"Courier New", Courier, monospace' }}
        style={{ borderRadius: '12px', boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
      >
        <p>Show AR content</p>
      </Modal>
    </div>
  );
};

export default VRARInterface;
