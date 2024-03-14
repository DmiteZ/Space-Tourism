import React from 'react';
import { header } from '../../informacion.json';
import { NavLink } from 'react-router-dom';

import useScreenSize from '../hooks/use-screen.js';

export default function NavBar({ isMenuOpen, handleClick }) {
  const { home, destination, crew, technology } = header;

  const { width } = useScreenSize();

  const isDeskotp = () => width >= 768;
  const isMobile = () => width < 768;

  const isNavLinkActive = (isActive) => {
    if (isActive && isDeskotp()) return { borderBottom: '3px solid white' };
    else if (isActive && isMobile()) return { borderRight: '3px solid white' };
  };

  /* estilos basados en TailwindCss */
  const stylesNavLink = 'md:pb-8 font-normal';
  const stylesSpanNavLink = 'font-semibold md:hidden lg:inline-block';

  return (
    <nav className={`nav-container-header ${isMenuOpen ? 'active' : ''}`}>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to={`/${home.path}`}
        onClick={() => handleClick()}>
        <span className={stylesSpanNavLink}>{home.id}</span> {home.path}
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isNavLinkActive(isActive || location.hash.includes(`/${destination.path}`))
        }
        className={stylesNavLink}
        to={`/${destination.path}/moon`}
        onClick={() => handleClick()}>
        <span className={stylesSpanNavLink}>{destination.id}</span> {destination.path}
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isNavLinkActive(isActive || location.hash.includes(`/${crew.path}`))
        }
        className={stylesNavLink}
        to={`/${crew.path}/douglas-hurley`}
        onClick={() => handleClick()}>
        <span className={stylesSpanNavLink}>{crew.id}</span> {crew.path}
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isNavLinkActive(isActive || location.hash.includes(`/${technology.path}`))
        }
        className={stylesNavLink}
        to={`/${technology.path}/launch-vehicle`}
        onClick={() => handleClick()}>
        <span className={stylesSpanNavLink}>{technology.id}</span> {technology.path}
      </NavLink>
    </nav>
  );
}
