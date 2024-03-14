import React, { useState } from 'react';
import { header } from '../../informacion.json';
import { NavLink } from 'react-router-dom';

import useScreenSize from '../../use-screen.js';

export default function NavBar() {
  const { home, destination, crew, technology, imagenes } = header;

  const [isOpen, setIsOpen] = useState(false);
  const { width } = useScreenSize();

  const isDeskotp = () => width >= 768;
  const isMobile = () => width < 768;

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  const navHidden = () => (isOpen ? 'opened' : 'closed');

  const isNavLinkActive = (isActive) => {
    if (isActive && isDeskotp()) return { borderBottom: '3px solid white' };
    else if (isActive && isMobile()) return { borderRight: '3px solid white' };
  };

  /* estilos basados en TailwindCss */
  const stylesIcons = 'fixed top-10 right-6 hover:cursor-pointer text-2xl text-white';
  const stylesNavLink = 'md:pb-8 font-normal';
  const stylesSpanNavLink = 'font-semibold md:hidden lg:inline-block';

  return (
    <>
      <div className="max-w-max md:hidden">
        <img
          src={imagenes.hamburger}
          onClick={() => handleOpenMenu()}
          className={stylesIcons}
          alt="Icon hamburger"
        />
      </div>

      <nav
        className={`${navHidden()} nav-container-header  closed pt-8 md:max-h-max md:opened pr  md:relative md:grid-rows-1 md:grid-cols-mxc4`}>
        <div className="max-w-max max-h-max justify-self-end pr-5  md:hidden">
          <img
            src={imagenes.close}
            alt="Icon close"
            onClick={() => handleCloseMenu()}
            className={stylesIcons}
          />
        </div>

        <div className="grid grid-cols-1 grid-rows-mxr4 gap-6 pl-6 md:grid-cols-mxc4 md:grid-rows-1 md:gap-6 lg:gap-3 md:pr-6">
          <NavLink
            style={({ isActive }) => isNavLinkActive(isActive)}
            className={stylesNavLink}
            to={`/${home.path}`}>
            <span className={stylesSpanNavLink}>{home.id}</span> {home.path}
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isNavLinkActive(isActive || location.hash.includes(`/${destination.path}`))
            }
            className={stylesNavLink}
            to={`/${destination.path}/moon`}>
            <span className={stylesSpanNavLink}>{destination.id}</span> {destination.path}
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isNavLinkActive(isActive || location.hash.includes(`/${crew.path}`))
            }
            className={stylesNavLink}
            to={`/${crew.path}/douglas-hurley`}>
            <span className={stylesSpanNavLink}>{crew.id}</span> {crew.path}
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isNavLinkActive(isActive || location.hash.includes(`/${technology.path}`))
            }
            className={stylesNavLink}
            to={`/${technology.path}/launch-vehicle`}>
            <span className={stylesSpanNavLink}>{technology.id}</span> {technology.path}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
