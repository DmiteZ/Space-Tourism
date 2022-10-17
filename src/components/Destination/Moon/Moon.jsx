import React from 'react';
import imagesDestination from '../imagesDestination.js';

export default function Moon() {
  const { moon } = imagesDestination();

  return (
    <>
      <figure className="image-destination">
        <img className="size-image" src={moon} alt="Moon" />
      </figure>

      <div className="content-destination">
        <h1>Moon</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
          perspective and come back refreshed. While you’re there, take in some history by visiting
          the Luna 2 and Apollo 11 landing sites.
        </p>

        <hr className="w-full my-5" />

        <div className="content-distance-destination uppercase">
          <div className="grid gap-1">
            <h3 className="text-sm">Avg. distance</h3>
            <h2 className="text-3xl">384,400km</h2>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm">Est. travel time</h3>
            <h2 className="text-3xl">3 days</h2>
          </div>
        </div>
      </div>
    </>
  );
}
