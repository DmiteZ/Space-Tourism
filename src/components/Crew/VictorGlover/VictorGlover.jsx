import React from 'react';

import imagesCrew from '../imagesCrew.js';

export default function VictorGlover() {
  const { victorGlover } = imagesCrew();

  return (
    <>
      <div className="content-crew">
        <h2>Pilot</h2>
        <h1>Victor Glover</h1>
        <p>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space
          Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew
          member of Expedition 64, and served as a station systems flight engineer.
        </p>
      </div>
      <figure className="image-crew">
        <img src={victorGlover} alt="Commander | Douglas Hurley" />
      </figure>
    </>
  );
}
