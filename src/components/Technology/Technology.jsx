import React from 'react';
import { Outlet } from 'react-router-dom';

import './estilos-technology.css';
import './estilos-technology-responsive.css';

import Header from '../Header/Header.jsx';
import NavTechnology from './NavTechnology.jsx';

export default function Technology() {
  return (
    <main className="main-technology grid grid-cols-1 grid-rows-mxr2fr w-screen h-screen bg-no-repeat bg-cover lg:h-screen">
      <Header />
      <section className="section-technology w-full h-full grid grid-cols-1 grid-rows-mxr2 gap-8 justify-items-center lg:gap-6">
        <h1 className="title-barlow text-base tracking-widest md:justify-self-start mb-0 md:text-xl">
          <span className="text-white opacity-25">03</span> Space launch 101
        </h1>
        <article className="article-technology w-full h-full">
          <NavTechnology />
          <Outlet />
        </article>
      </section>
    </main>
  );
}
