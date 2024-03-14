import React from 'react';
import { header } from '../../informacion.json';
import './estilos-header.css';
import useMenu from '../hooks/use-menu.jsx';
import Buttons from './buttons';
import NavBar from './nav-bar.jsx';

export default function Layout() {
  const { imagenes } = header;
  const { isMenuOpen, toggleMenu, closeMenuOnClick, handleClick } = useMenu();

  return (
    <header className="absolute w-full h-24 top-0 z-10 px-6 md:pr-0">
      <div className="max-w-max max-h-max bg-white rounded-full mr-9">
        <img src={imagenes.logo} alt="Logo" style={{ fontSize: '60px' }} />
      </div>

      <hr className="w-96 h-px relative z-50 bg-white opacity-25 hidden lg:block justify-self-end" />
      <Buttons
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenuOnClick={closeMenuOnClick}
      />
      <NavBar handleClick={handleClick} isMenuOpen={isMenuOpen} />
    </header>
  );
}
