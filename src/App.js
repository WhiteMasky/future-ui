// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Layout } from 'antd';
// import ControlPanel from './components/ControlPanel';
// import RealTimeFeedback from './components/RealTimeFeedback';

// const { Header, Content } = Layout;

// function App() {
//   const [brainwaveData, setBrainwaveData] = useState(0);

//   // 模拟实时数据更新
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBrainwaveData(Math.floor(Math.random() * 100));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Header style={{ color: 'white', fontSize: '24px' }}>
//         BCI Control Panel
//       </Header>
//       <Content style={{ padding: '50px' }}>
//         <ControlPanel />
//         <RealTimeFeedback data={brainwaveData} />
//       </Content>
//     </Layout>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { Layout } from 'antd';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import ControlPanel from './components/ControlPanel';
// import RealTimeFeedback from './components/RealTimeFeedback';
// import ComponentBox from './components/ComponentBox';
// import DesignCanvas from './components/DesignCanvas';

// const { Header, Content } = Layout;

// function App() {
//   const [components, setComponents] = useState([]);

//   const handleDrop = (item) => {
//     setComponents((prev) => [...prev, item]);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Header style={{ color: 'white', fontSize: '24px' }}>Low Code Design Platform</Header>
//         <Content style={{ padding: '50px', display: 'flex', gap: '20px' }}>
//           <div>
//             <ComponentBox name="Control Panel" type="ControlPanel" />
//             <ComponentBox name="Real-Time Feedback" type="RealTimeFeedback" />
//           </div>
//           <DesignCanvas onDrop={handleDrop} />
//         </Content>
//       </Layout>
//     </DndProvider>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Draggable from 'react-draggable';
import ControlPanel from './components/ControlPanel';
import RealTimeFeedback from './components/RealTimeFeedback';

const { Header, Content } = Layout;

function App() {
  const [brainwaveData, setBrainwaveData] = useState(0);

  // 模拟实时数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      setBrainwaveData(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', fontSize: '24px' }}>
        BCI Control Panel
      </Header>
      <Content style={{ padding: '50px', position: 'relative' }}>
        <Draggable bounds="parent">
          <div style={{ position: 'absolute' }}>
            <ControlPanel />
          </div>
        </Draggable>
        <Draggable bounds="parent">
          <div style={{ position: 'absolute', top: '200px' }}>
            <RealTimeFeedback data={brainwaveData} />
          </div>
        </Draggable>
      </Content>
    </Layout>
  );
}

export default App;