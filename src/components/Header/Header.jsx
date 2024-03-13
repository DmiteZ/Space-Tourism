import React from 'react';
import { header } from '../../informacion.json';
import './estilos-header.css';

import NavBar from './nav-bar.jsx';

export default function Layout() {
  const { imagenes } = header;

  return (
    <header className="absolute h-24 top-0 z-10 w-full grid grid-cols-mxc2 justify-between items-center px-6 md:pr-0 lg:grid-cols-mxc2">
      <div className="max-w-max max-h-max bg-white rounded-full">
        <img src={imagenes.logo} alt="Logo" style={{ fontSize: '60px' }} />
      </div>
      <div className="grid md:grid-cols-mxc2fr justify-center items-center">
        <hr className="w-80 h-px relative left-2 z-50 bg-white opacity-25 hidden lg:block justify-self-end" />
        <NavBar />
      </div>
    </header>
  );
}
