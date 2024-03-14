import React from 'react';
import './estilos-crew.css';
import './estilos-crew-responsive.css';

import { crew } from '../../informacion.json';
import Miembros from './miembros';

export default function Crew() {
  return (
    <main className="main-crew w-full h-max bg-no-repeat bg-cover grid grid-cols-1 grid-rows-1 lg:h-screen">
      <section className="section-crew w-full h-full">
        <h1 className="title-barlow">
          <span className="text-white opacity-25">{crew.id}</span> {crew.titulo}
        </h1>
        <Miembros />
      </section>
    </main>
  );
}
