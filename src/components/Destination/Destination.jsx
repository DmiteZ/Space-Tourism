import React from 'react';
import { destination } from '../../informacion.json';
import Destinos from './destinos';

import './estilos-destination.css';
import './estilos-destination-responsive.css';

export default function Destination() {
  const { id, titulo } = destination;
  return (
    <main className="main-destination w-screen h-full bg-no-repeat bg-cover lg:h-screen">
      <section className="section-destination w-full h- grid grid-cols-1 grid-rows-mxr2fr gap-10 justify-items-center lg:gap-6">
        <h1 className="title-barlow text-base tracking-widest md:justify-self-start mb-0 md:text-xl">
          <span className="text-white opacity-25">{id}</span> {titulo}
        </h1>
        <Destinos />
      </section>
    </main>
  );
}
