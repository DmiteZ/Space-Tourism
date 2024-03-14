import React from 'react';
import Terminos from './terminos';
import './estilos-technology.css';
import './estilos-technology-responsive.css';

export default function Technology() {
  return (
    <main className="main-technology grid grid-cols-1 grid-rows-1 w-screen bg-no-repeat bg-cover lg:h-screen">
      <section className="section-technology w-full h-full grid grid-cols-1 grid-rows-mxr2fr gap-8 justify-items-center lg:gap-6">
        <h1 className="title-barlow text-base tracking-widest md:justify-self-start mb-0 md:text-xl">
          <span className="text-white opacity-25">03</span> Space launch 101
        </h1>
        <Terminos />
      </section>
    </main>
  );
}
