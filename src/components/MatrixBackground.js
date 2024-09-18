// MatrixBackground.jsx
import React from 'react';
import MatrixCodeRainComponent from 'react-matrix-code-rain';

const MatrixBackground = () => {

    return (
        <div
        style={{
            position: 'fixed', // 确保背景固定在视口的最底层
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1, // 设置 z-index 为负值，确保它在最底下
          }}
        >
        <MatrixCodeRainComponent theColors={'#81ec72'} stripCount={10} timeout={100} width={3000} height={3000}/>
        </div>

    );
};

export default MatrixBackground;
