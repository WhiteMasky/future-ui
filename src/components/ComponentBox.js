import React from 'react';
import { useDrag } from 'react-dnd';

const ComponentBox = ({ name, type }) => {
  const [, drag] = useDrag({
    type: 'COMPONENT',
    item: { name, type },
  });

  return (
    <div ref={drag} style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '8px' }}>
      {name}
    </div>
  );
};

export default ComponentBox;
