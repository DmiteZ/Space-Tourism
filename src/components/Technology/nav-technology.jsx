import React from 'react';
import { technology } from '../../informacion.json';
import { NavLink } from 'react-router-dom';

export default function NavTechnology({ baseRoute }) {
  const { terminos } = technology;
  const { launchVehicle, spacePort, spaceCapsule } = terminos;
  const isNavLinkActive = (isActive) => (isActive ? { background: '#fff', color: '#000' } : {});

  /* estilos basados en TailwindCss */
  const stylesNavLink = 'w-10 h-10 rounded-full bg-transparent text-white lg:w-20 lg:h-20';

  return (
    <nav className="nav-technology">
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to={`${baseRoute}/${launchVehicle.id}`}>
        1
      </NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to={`${baseRoute}/${spacePort.id}`}>
        2
      </NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to={`${baseRoute}/${spaceCapsule.id}`}>
        3
      </NavLink>
    </nav>
  );
}
