import React from 'react';

import Header from '../Header/Header.jsx';

import './estilos-home.css';

export default function Home() {
  return (
    <main className="main-home w-full bg-no-repeat bg-cover gap-24 lg:gap-3 lg:h-screen grid lg:grid-rows-mxr2fr">
      <Header />
      <section className="section-home grid gap-24 my-6 md:gap-6 md:mx-40 md:my-10 lg:mx-20">
        <article className="content-home text-center lg:text-start w-80 md:w-96">
          <h5 className="title-barlow -tracking-tighter uppercase text-3xl mb-5">
            So, you want to travel to
          </h5>

          <h1 className="text-7xl text-center w-full lg:max-w-max">Space</h1>

          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </article>

        <div className="circle rounded-full bg-white">
          <p className="uppercase text-black -tracking-tighter text-3xl">Explore</p>
        </div>
      </section>
    </main>
  );
}
