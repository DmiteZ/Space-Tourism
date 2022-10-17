import React from 'react';

import imagesDestination from '../imagesDestination.js';

export default function Mars() {
  const { mars } = imagesDestination();

  return (
    <>
      <figure className="image-destination">
        <img className="size-image" src={mars} alt="Mars" />
      </figure>

      <div className="content-destination">
        <h1>Mars</h1>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the
          tallest planetary mountain in our solar system. It’s two and a half times the size of
          Everest!
        </p>

        <hr className="w-full my-5" />

        <div className="content-distance-destination uppercase">
          <div className="grid gap-1">
            <h3 className="text-sm">Avg. distance</h3>
            <h2 className="text-3xl">25 mil. km</h2>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm">Est. travel time</h3>
            <h2 className="text-3xl">9 months</h2>
          </div>
        </div>
      </div>
    </>
  );
}
