import React from 'react';
import { destination } from '../../informacion.json';
import { NavLink } from 'react-router-dom';

export default function NavDestination({ baseRoute }) {
  const { destinos } = destination;
  const { moon, marts, europa, titan } = destinos;
  const isNavLinkActive = (isActive) => (isActive ? { borderBottom: '3px solid white' } : {});

  return (
    <nav className="navigation-menu-destination w-full grid grid-cols-mxc4 gap-5 justify-center lg:justify-start">
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        to={`${baseRoute}/${moon.titulo}`}>
        {moon.titulo}
      </NavLink>

      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        to={`${baseRoute}/${marts.titulo}`}>
        {marts.titulo}
      </NavLink>

      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        to={`${baseRoute}/${europa.titulo}`}>
        {europa.titulo}
      </NavLink>

      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        to={`${baseRoute}/${titan.titulo}`}>
        {titan.titulo}
      </NavLink>
    </nav>
  );
}
