import React from 'react';
import { useParams } from 'react-router-dom';
import { crew } from '../../informacion.json';
import NavCrew from './nav-crew.jsx';
import Miembro from './miembro.jsx';

export default function miembros() {
  const { id: paramsid } = useParams();
  const { miembros } = crew;
  const miembroActual = Object.values(miembros).find((miembro) => miembro.id === paramsid);

  return (
    <article className="article-crew">
      <NavCrew baseRoute={'/crew'} />
      {miembroActual && <Miembro datosMiembros={miembroActual} />}
    </article>
  );
}
