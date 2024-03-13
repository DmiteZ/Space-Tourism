import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './components/Home/Home.jsx';

import Destination from './components/Destination/Destination.jsx';
import Destinos from './components/Destination/destino.jsx';

import Crew from './components/Crew/Crew.jsx';
import Miembros from './components/Crew/miembros';

import Technology from './components/Technology/Technology.jsx';
import Terminos from './components/Technology/terminos';

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />

        <Route path="/destination/" element={<Destination />}>
          <Route path=":id" element={<Destinos />} />
        </Route>

        <Route path="/crew/" element={<Crew />}>
          <Route path=":id" element={<Miembros />} />
        </Route>

        <Route path="/technology/" element={<Technology />}>
          <Route path=":id" element={<Terminos />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
