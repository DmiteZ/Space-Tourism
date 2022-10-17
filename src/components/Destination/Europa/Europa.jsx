import React from 'react';

import imagesDestination from '../imagesDestination.js';

export default function Europa() {
  const { europa } = imagesDestination();

  return (
    <>
      <figure className="image-destination">
        <img className="size-image" src={europa} alt="Europa" />
      </figure>

      <div className="content-destination">
        <h1>Europa</h1>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s
          dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or
          simple relaxation in your snug wintery cabin.
        </p>

        <hr className="w-full my-5" />

        <div className="content-distance-destination uppercase">
          <div className="grid gap-1">
            <h3 className="text-sm">Avg. distance</h3>
            <h2 className="text-3xl">628 mil. km</h2>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm">Est. travel time</h3>
            <h2 className="text-3xl">3 years</h2>
          </div>
        </div>
      </div>
    </>
  );
}
