import React from 'react';
import { Outlet } from 'react-router-dom';

import './estilos-destination.css';
import './estilos-destination-responsive.css';

import Header from '../Header/Header.jsx';
import NavDestination from './NavDestination.jsx';

export default function Destination() {
  return (
    <main className="main-destination w-screen h-full bg-no-repeat bg-cover lg:h-screen">
      <Header />
      <section className="section-destination w-full h-full grid grid-cols-1 grid-rows-mxr2 gap-10 justify-items-center lg:gap-6">
        <h1 className="title-barlow text-base tracking-widest md:justify-self-start mb-0 md:text-xl">
          <span className="text-white opacity-25">01</span> Pick your destination
        </h1>
        <article className="article-destination w-full h-full justify-items-center grid-cols-1 grid-rows-mxr3 gap-6 lg:grid-cols-2 lg:grid-rows-mxr2">
          <NavDestination />
          <Outlet />
        </article>
      </section>
    </main>
  );
}
