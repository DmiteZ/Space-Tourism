import React from 'react';
import { Outlet } from 'react-router-dom';

import './estilos-crew.css';
import './estilos-crew-responsive.css';

import Header from '../Header/Header.jsx';
import NavCrew from './NavCrew.jsx';

export default function Crew() {
  return (
    <main className="main-crew w-full h-max bg-no-repeat bg-cover grid grid-cols-1 grid-rows-mxr2fr lg:h-screen lg:w-screen">
      <Header />

      <section className="section-crew w-full h-full lg:w-screen">
        <h1 className="title-barlow">
          <span className="text-white opacity-25">02</span> Meet your creew
        </h1>

        <article className="article-crew">
          <NavCrew />

          <Outlet />
        </article>
      </section>
    </main>
  );
}
