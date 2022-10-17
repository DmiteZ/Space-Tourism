import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { imagesHeader } from './imagesHeader.js';

import useScreenSize from '../../useScreen.js';

export default function NavBar() {
  const { iconHamburger, iconClose } = imagesHeader();

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
  const stylesIcons = 'hover:cursor-pointer text-2xl text-white';
  const stylesNavLink = 'md:pb-8 font-normal';
  const stylesSpanNavLink = 'font-semibold md:hidden lg:inline-block';

  return (
    <>
      <div className="max-w-max md:hidden">
        <img
          src={iconHamburger}
          onClick={() => handleOpenMenu()}
          className={stylesIcons}
          alt="Icon hamburger"
        />
      </div>

      <nav
        className={`${navHidden()} nav-container-header  closed pt-8 md:max-h-max md:opened  md:relative md:grid-rows-1 md:grid-cols-mxc4`}>
        <div className="max-w-max max-h-max justify-self-end pr-5  md:hidden">
          <img
            src={iconClose}
            alt="Icon close"
            onClick={() => handleCloseMenu()}
            className={stylesIcons}
          />
        </div>

        <div className="grid grid-cols-1 grid-rows-mxr4 gap-6 pl-6 md:grid-cols-mxc4 md:grid-rows-1 md:gap-6 lg:gap-3 md:pr-6">
          <NavLink
            style={({ isActive }) => isNavLinkActive(isActive)}
            className={stylesNavLink}
            to="/home">
            <span className={stylesSpanNavLink}>00</span> Home
          </NavLink>

          <NavLink
            style={({ isActive }) => isNavLinkActive(isActive)}
            className={stylesNavLink}
            to="/destination">
            <span className={stylesSpanNavLink}>01</span> Destination
          </NavLink>

          <NavLink
            style={({ isActive }) => isNavLinkActive(isActive)}
            className={stylesNavLink}
            to="/crew">
            <span className={stylesSpanNavLink}>02</span> Crew
          </NavLink>

          <NavLink
            style={({ isActive }) => isNavLinkActive(isActive)}
            className={stylesNavLink}
            to="/technology">
            <span className={stylesSpanNavLink}>03</span> Technology
          </NavLink>
        </div>
      </nav>
    </>
  );
}
