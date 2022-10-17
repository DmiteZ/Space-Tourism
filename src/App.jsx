import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';

import Destination from './components/Destination/Destination.jsx';
import Moon from './components/Destination/Moon/Moon.jsx';
import Mars from './components/Destination/Mars/Mars.jsx';
import Europa from './components/Destination/Europa/Europa.jsx';
import Titan from './components/Destination/Titan/Titan.jsx';

import Crew from './components/Crew/Crew.jsx';
import DouglasHurley from './components/Crew/DouglasHurley/DouglasHurley.jsx';
import MarkShuttleworth from './components/Crew/MarkShuttleworth/MarkShuttleworth.jsx';
import VictorGlover from './components/Crew/VictorGlover/VictorGlover.jsx';
import AnoushehAnsari from './components/Crew/AnoushehAnsari/AnoushehAnsari.jsx';

import Technology from './components/Technology/Technology.jsx';
import LaunchVehicle from './components/Technology/Launch-Vehicle/LaunchVehicle.jsx';
import SpacePort from './components/Technology/Space-Port/SpacePort.jsx';
import SpaceCapsule from './components/Technology/Space-Capsule/SpaceCapsule.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/destination" element={<Destination />}>
          <Route index element={<Navigate replace to="moon" />} />

          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="/crew" element={<Crew />}>
          <Route index element={<Navigate replace to="Douglas-Hurley" />} />
          <Route path="Douglas-Hurley" element={<DouglasHurley />} />
          <Route path="Mark-Shuttleworth" element={<MarkShuttleworth />} />
          <Route path="Victor-Glover" element={<VictorGlover />} />
          <Route path="Anousheh-Ansari" element={<AnoushehAnsari />} />
        </Route>

        <Route path="/technology" element={<Technology />}>
          <Route index element={<Navigate replace to="launch-vehicle" />} />
          <Route path="launch-vehicle" element={<LaunchVehicle />} />
          <Route path="space-port" element={<SpacePort />} />
          <Route path="space-capsule" element={<SpaceCapsule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
