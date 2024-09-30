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
// import React from 'react';
// import MatrixCodeRainComponent from 'react-matrix-code-rain';
// import backgroundVideo from '../15708475-hd_1280_720_24fps.mp4';
//
// const MatrixVideoBackground = () => {
//     return (
//         <div className="fixed inset-0 w-full h-full overflow-hidden">
//             {/* Video Background */}
//             <video
//                 className="absolute inset-0 w-full h-full object-cover"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//             >
//                 <source src={`${process.env.PUBLIC_URL}/15708475-hd_1280_720_24fps.mp4`} type="video/mp4"/>
//                 Your browser does not support the video tag.
//             </video>
//
//             {/* Matrix Code Rain Effect */}
//             <div className="absolute inset-0 z-10">
//                 <MatrixCodeRainComponent
//                     theColors={'#81ec72'}
//                     stripCount={10}
//                     timeout={100}
//                     width={window.innerWidth}
//                     height={window.innerHeight}
//                 />
//             </div>
//
//             {/* Content Overlay */}
//             {/*<div className="relative z-20 h-full w-full bg-black bg-opacity-30 flex items-center justify-center">*/}
//             {/*    <h1 className="text-4xl font-bold text-white">Your Content Here</h1>*/}
//             {/*</div>*/}
//         </div>
//     );
// };
//
// export default MatrixVideoBackground;
