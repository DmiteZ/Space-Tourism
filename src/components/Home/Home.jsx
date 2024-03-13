import React from 'react';
import './estilos-home.css';
import { home } from '../../informacion.json';

export default function Home() {
  return (
    <main className="main-home w-full h-full bg-no-repeat bg-cover gap-24 lg:gap-3 grid lg:grid-rows-1">
      <section className="section-home grid gap-24 my-6 md:gap-6 md:mx-40 md:my-10 lg:mx-20">
        <article className="content-home text-center lg:text-start w-80 md:w-96">
          <h5 className="title-barlow -tracking-tighter uppercase text-3xl mb-5">
            {home.subtitulo}
          </h5>

          <h1 className="text-7xl text-center w-full lg:max-w-max">{home.titulo}</h1>

          <p>{home.descripcion}</p>
        </article>

        <div className="circle rounded-full bg-white">
          <p className="uppercase text-black -tracking-tighter text-3xl">Explore</p>
        </div>
      </section>
    </main>
  );
}
