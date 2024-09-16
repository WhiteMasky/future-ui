import React from 'react';
import { useDrop } from 'react-dnd';

const DesignCanvas = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop} style={{ minHeight: '400px', border: '2px dashed #aaa', padding: '16px' }}>
      Drop components here!
    </div>
  );
};

export default DesignCanvas;
