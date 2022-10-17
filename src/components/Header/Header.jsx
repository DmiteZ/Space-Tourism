import React from 'react';

import './estilos-header.css';

import { imagesHeader } from './imagesHeader.js';
import NavBar from './NavBar.jsx';

export default function Layout() {
  const { logoSVG } = imagesHeader();

  return (
    <header className="h-full w-full grid grid-cols-mxc2 justify-between items-center pt-6 px-6 md:pr-0 lg:grid-cols-mxc2">
      <div className="max-w-max max-h-max bg-white rounded-full">
        <img src={logoSVG} alt="Logo" style={{ fontSize: '60px' }} />
      </div>
      <div className="grid md:grid-cols-mxc2fr justify-center items-center">
        <hr className="w-80 h-px relative left-2 z-50 bg-white opacity-25 hidden lg:block justify-self-end" />
        <NavBar />
      </div>
    </header>
  );
}
