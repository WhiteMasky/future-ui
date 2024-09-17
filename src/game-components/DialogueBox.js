// DialogueBox.js
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DialogueBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 定义内联样式
  const modalStyles = {
    modalContent: {
      backgroundColor: '#000', 
      border: '2px solid #4CAF50', 
      boxShadow: '0 0 15px rgba(76, 175, 80, 0.5)'
    },
    modalHeader: {
      backgroundColor: '#000',
      borderBottom: '1px solid #4CAF50',
      color: '#4CAF50',
    },
    modalTitle: {
      color: '#4CAF50',
    },
    modalClose: {
      color: '#4CAF50',
    },
    retroText: {
      fontFamily: '"Courier New", Courier, monospace',
      color: '#4CAF50',
      textShadow: '0 0 5px rgba(76, 175, 80, 0.7), 0 0 10px rgba(76, 175, 80, 0.5), 0 0 15px rgba(76, 175, 80, 0.3)',
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={showModal}>
        Open Dialogue
      </Button>
      <Modal
        title={<span style={modalStyles.modalTitle}>NPC Conversation</span>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={modalStyles.modalContent}
        bodyStyle={{ backgroundColor: '#000' }} // modal body 的背景色
        closeIcon={<span style={modalStyles.modalClose}>X</span>} // 关闭按钮的样式
      >
        <p style={modalStyles.retroText}>NPC: Welcome to the adventure, brave hero!</p>
        <p style={modalStyles.retroText}>Player: I'm ready to face the challenge!</p>
      </Modal>
    </div>
  );
};

export default DialogueBox;
