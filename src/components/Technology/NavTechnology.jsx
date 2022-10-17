import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavTechnology() {
  const isNavLinkActive = (isActive) => (isActive ? { background: '#fff', color: '#000' } : {});

  /* estilos basados en TailwindCss */
  const stylesNavLink = 'w-10 h-10 rounded-full bg-transparent text-white lg:w-20 lg:h-20';

  return (
    <nav className="nav-technology">
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="launch-vehicle">
        1
      </NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="space-port">
        2
      </NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="space-capsule">
        3
      </NavLink>
    </nav>
  );
}
