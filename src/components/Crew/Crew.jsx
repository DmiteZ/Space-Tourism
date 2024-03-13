import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './estilos-crew.css';
import './estilos-crew-responsive.css';

import { crew } from '../../informacion.json';
import Miembros from './miembros';

export default function Crew() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/crew/douglas-hurley');
  }, []);

  return (
    <main className="main-crew w-full h-max bg-no-repeat bg-cover grid grid-cols-1 grid-rows-1 lg:h-screen lg:w-screen">
      <section className="section-crew w-full h-full lg:w-screen">
        <h1 className="title-barlow">
          <span className="text-white opacity-25">{crew.id}</span> {crew.titulo}
        </h1>
        <Miembros />
      </section>
    </main>
  );
}
