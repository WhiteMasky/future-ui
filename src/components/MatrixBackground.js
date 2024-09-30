import React from 'react';
import backgroundVideo from '../backgroundvideo.mp4';

const MatrixVideoBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={backgroundVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="relative z-20 h-full w-full bg-black bg-opacity-30 flex items-center justify-center opacity-55">
                <h1 className="text-4xl font-bold text-white">Loading...</h1>
            </div>
        </div>
    );
};

export default MatrixVideoBackground;
// MatrixBackground.jsx
// import React from 'react';
// import MatrixCodeRainComponent from 'react-matrix-code-rain';
//
// const MatrixBackground = () => {
//
//     return (
//         <div
//         style={{
//             position: 'fixed', // 确保背景固定在视口的最底层
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             overflow: 'hidden',
//             zIndex: -1, // 设置 z-index 为负值，确保它在最底下
//           }}
//         >
//         <MatrixCodeRainComponent theColors={'#81ec72'} stripCount={10} timeout={100} width={3000} height={3000}/>
//         </div>
//
//     );
// };
//
// export default MatrixBackground;