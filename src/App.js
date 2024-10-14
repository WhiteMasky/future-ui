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



// import React, { useState, useEffect } from 'react';
// import { Layout } from 'antd';
// import Draggable from 'react-draggable';
// import ControlPanel from './components/ControlPanel';
// import RealTimeFeedback from './components/RealTimeFeedback';
// import { CharacterStatus, EmotionalStateMonitor } from 'future-game-ui';


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
//       <Content style={{ padding: '50px', position: 'relative' }}>
//         <CharacterStatus />
//         <EmotionalStateMonitor />
//         <Draggable bounds="parent">
//           <div style={{ position: 'absolute' }}>
//             <ControlPanel />
//           </div>
//         </Draggable>
//         <Draggable bounds="parent">
//           <div style={{ position: 'absolute', top: '200px' }}>
//             <RealTimeFeedback data={brainwaveData} />
//           </div>
//         </Draggable>
//       </Content>
//     </Layout>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import Draggable from 'react-draggable';
// import NeuralInputMonitor from './monitor-components/NeuralInputMonitor';
// import EmotionalStateMonitor from './monitor-components/EmotionalStateMonitor';
// import HapticFeedbackSimulator from './monitor-components/HapticFeedbackSimulator';
// import VRARInterface from './monitor-components/VRARInterface';
// import HealthMonitor from './monitor-components/HealthMonitor';
// import SettingsPanel from './monitor-components/SettingsPanel';
// import Navigation from './game-components/Navigation';
// import CharacterStatus from './game-components/CharacterStatus';
// import QuestLog from './game-components/QuestLog';
// import Inventory from './game-components/Inventory';
// import MiniMap from './game-components/MiniMap';
// import DialogueBox from './game-components/DialogueBox';

// export default function App() {
//   // 设置状态
//   const [settings, setSettings] = useState({
//     fontSize: 16,
//     themeColor: '#1DA57A',
//     brightness: 100,
//     volume: 50
//   });

//   // 处理设置更改
//   const handleSettingsChange = (newSettings) => {
//     setSettings(prevSettings => ({
//       ...prevSettings,
//       ...newSettings
//     }));
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>

//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold mb-6">Neural Interface Game Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* 传递设置到各个组件 */}
//           <Draggable bounds="parent">
//             <div style={{ fontSize: settings.fontSize }}>
//               <NeuralInputMonitor />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div style={{ fontSize: settings.fontSize }}>
//               <EmotionalStateMonitor />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div style={{ fontSize: settings.fontSize }}>
//               <HapticFeedbackSimulator />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div style={{ fontSize: settings.fontSize }}>
//               <VRARInterface />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div style={{ fontSize: settings.fontSize }}>
//               <HealthMonitor />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <SettingsPanel onSettingsChange={handleSettingsChange} />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <Navigation />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <CharacterStatus />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <QuestLog />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <Inventory />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <MiniMap />
//             </div>
//           </Draggable>
//           <Draggable bounds="parent">
//             <div>
//               <DialogueBox />
//             </div>
//           </Draggable>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import Draggable from 'react-draggable';
// import NeuralInputMonitor from './monitor-components/NeuralInputMonitor';
// import EmotionalStateMonitor from './monitor-components/EmotionalStateMonitor';
// import HapticFeedbackSimulator from './monitor-components/HapticFeedbackSimulator';
// import VRARInterface from './monitor-components/VRARInterface';
// import HealthMonitor from './monitor-components/HealthMonitor';
// import SettingsPanel from './monitor-components/SettingsPanel';
// import Navigation from './game-components/Navigation';
// import CharacterStatus from './game-components/CharacterStatus';
// import QuestLog from './game-components/QuestLog';
// import Inventory from './game-components/Inventory';
// import MiniMap from './game-components/MiniMap';
// import DialogueBox from './game-components/DialogueBox';

// export default function App() {
//   // 设置状态
//   const [settings, setSettings] = useState({
//     fontSize: 16,
//     themeColor: '#1DA57A',
//     brightness: 100,
//     volume: 50
//   });

//   // 处理设置更改
//   const handleSettingsChange = (newSettings) => {
//     setSettings(prevSettings => ({
//       ...prevSettings,
//       ...newSettings
//     }));
//   };

//   return (
//     <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#f0f2f5' }}>

//       <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <h1 style={{
//         textAlign: 'center',
//         fontSize: '2rem',
//         fontWeight: 'bold',
//         marginBottom: '1.5rem',
//         color: '#00FFFF',
//         textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
//         fontFamily: '"Courier New", Courier, monospace',
//       }}>
//         Neural Interface Game Dashboard
//       </h1>


//         {/* 传递设置到各个组件 */}
//         <Draggable>
//           <div style={{ position: 'absolute', fontSize: settings.fontSize, width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <NeuralInputMonitor />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '100px', fontSize: settings.fontSize, width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <EmotionalStateMonitor />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '200px', fontSize: settings.fontSize, width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <HapticFeedbackSimulator />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '300px', fontSize: settings.fontSize, width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <VRARInterface />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '400px', fontSize: settings.fontSize, width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <HealthMonitor />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '500px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <SettingsPanel onSettingsChange={handleSettingsChange} />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '600px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <Navigation />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '700px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <CharacterStatus />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '800px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <QuestLog />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '900px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <Inventory />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '1000px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <MiniMap />
//           </div>
//         </Draggable>

//         <Draggable>
//           <div style={{ position: 'absolute', top: '1100px', width: '300px', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
//             <DialogueBox />
//           </div>
//         </Draggable>
//       </div>
//     </div>
//   );
// }









// App.jsx
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import NeuralInputMonitor from './monitor-components/NeuralInputMonitor';
import EmotionalStateMonitor from './monitor-components/EmotionalStateMonitor';
import HapticFeedbackSimulator from './monitor-components/HapticFeedbackSimulator';
import VRARInterface from './monitor-components/VRARInterface';
import HealthMonitor from './monitor-components/HealthMonitor';
import SettingsPanel from './monitor-components/SettingsPanel';
import Navigation from './game-components/Navigation';
import CharacterStatus from './game-components/CharacterStatus';
import QuestLog from './game-components/QuestLog';
import Inventory from './game-components/Inventory';
import MiniMap from './game-components/MiniMap';
import DialogueBox from './game-components/DialogueBox';
import MatrixBackground from './components/MatrixBackground';


export default function App() {
  const [settings, setSettings] = useState({
    fontSize: 16,
    themeColor: '#1DA57A',
    brightness: 100,
    volume: 50
  });

  const handleSettingsChange = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };


  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

      <MatrixBackground />

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#00FFFF',
          textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
          fontFamily: '"Courier New", Courier, monospace',
        }}>
          Neural Interface Game Dashboard
        </h1>

        {/* 传递设置到各个组件 */}
        <Draggable>
          <div style={{ position: 'absolute', fontSize: settings.fontSize, width: '800px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <NeuralInputMonitor />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '100px', fontSize: settings.fontSize, width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <EmotionalStateMonitor />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '200px', fontSize: settings.fontSize, width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <HapticFeedbackSimulator />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute',right: '20px', top: '20px', fontSize: settings.fontSize, width: '240px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <VRARInterface />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '400px', fontSize: settings.fontSize, width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <HealthMonitor />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', right: '20px',top: '300px', width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <SettingsPanel onSettingsChange={handleSettingsChange} />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', right: '20px',top: '120px', width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <Navigation />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', right: '20px', top: '760px', width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <CharacterStatus />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '800px', width: '300px', backgroundColor: 'black', padding: '2px', borderRadius: '16px' }}>
            <QuestLog />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '900px', width: '600px', backgroundColor: 'black',padding: '8px', borderRadius: '16px' }}>
            <Inventory />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '0px', width: '300px', backgroundColor: 'black',padding: '2px', borderRadius: '16px' }}>
            <MiniMap />
          </div>
        </Draggable>

        <Draggable>
          <div style={{ position: 'absolute', top: '1100px', width: '300px', backgroundColor: 'black', padding: '8px', borderRadius: '16px' }}>
            <DialogueBox />
          </div>
        </Draggable>
      </div>
    </div>
  );
}
