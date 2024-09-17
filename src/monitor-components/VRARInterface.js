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


// VRARInterface.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import 'tailwindcss/tailwind.css';

const VRARInterface = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-4">
      <Button type="primary" onClick={() => setVisible(true)}>
        VR Start
      </Button>
      <Modal
        title="虚拟现实"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <p>Show VR content</p>
      </Modal>
      <Button type="primary" onClick={() => setVisible(true)}>
        AR Start
      </Button>
      <Modal
        title="增强现实环境"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <p>Show AR content</p>
      </Modal>
    </div>
  );
};

export default VRARInterface;
