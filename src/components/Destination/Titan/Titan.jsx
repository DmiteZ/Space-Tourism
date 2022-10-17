import React from 'react';

import imagesDestination from '../imagesDestination.js';

export default function Titan() {
  const { titan } = imagesDestination();

  return (
    <>
      <figure className="image-destination">
        <img className="size-image" src={titan} alt="Titan" />
      </figure>

      <div className="content-destination">
        <h1>Titan</h1>
        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from
          home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings
          of Saturn.
        </p>

        <hr className="w-full my-5" />

        <div className="content-distance-destination uppercase">
          <div className="grid gap-1">
            <h3 className="text-sm">Avg. distance</h3>
            <h2 className="text-3xl">16 bil. km</h2>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm">Est. travel time</h3>
            <h2 className="text-3xl">7 years</h2>
          </div>
        </div>
      </div>
    </>
  );
}
