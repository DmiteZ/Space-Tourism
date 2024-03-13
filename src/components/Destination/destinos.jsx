import React from 'react';
import { useParams } from 'react-router-dom';
import { destination } from '../../informacion.json';
import Destino from './destino.jsx';
import NavDestination from './nav-destination.jsx';

export default function destinos() {
  const { id: paramsid } = useParams();
  const { destinos } = destination;
  const destinoActual = Object.values(destinos).find((destino) => destino.titulo === paramsid);

  return (
    <article className="article-destination w-full h-full justify-items-center grid-cols-1 grid-rows-mxr3 gap-6 lg:grid-cols-2 lg:grid-rows-mxr2">
      <NavDestination baseRoute={'/destination'} />
      {destinoActual && <Destino destination={destinoActual} />}
    </article>
  );
}
