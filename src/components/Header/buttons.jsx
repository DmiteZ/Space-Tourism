import React from 'react';
import { header } from '../../informacion.json';

export default function buttons({ isMenuOpen, toggleMenu, closeMenuOnClick }) {
  const { imagenes } = header;

  return (
    <>
      <button className={`buttonOpenMenu  ${isMenuOpen ? 'inactive' : 'active'}`}>
        <img src={imagenes.hamburger} onClick={toggleMenu} alt="Icon hamburger" />
      </button>
      <button className={`buttonCloseMenu ${isMenuOpen ? 'active' : 'inactive'}`}>
        <img src={imagenes.close} alt="Icon close" onClick={closeMenuOnClick} />
      </button>
    </>
  );
}
