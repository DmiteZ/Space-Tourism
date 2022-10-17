import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavDestination() {
  const isNavLinkActive = (isActive) => (isActive ? { borderBottom: '3px solid white' } : {});

  return (
    <nav className="navigation-menu-destination w-full grid grid-cols-mxc4 gap-5 justify-center lg:justify-start">
      <NavLink style={({ isActive }) => isNavLinkActive(isActive)} to="moon">
        Moon
      </NavLink>

      <NavLink style={({ isActive }) => isNavLinkActive(isActive)} to="mars">
        Mars
      </NavLink>

      <NavLink style={({ isActive }) => isNavLinkActive(isActive)} to="europa">
        Europa
      </NavLink>

      <NavLink style={({ isActive }) => isNavLinkActive(isActive)} to="titan">
        Titan
      </NavLink>
    </nav>
  );
}
