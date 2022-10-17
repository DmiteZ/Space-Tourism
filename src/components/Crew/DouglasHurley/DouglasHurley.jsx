import React from 'react';

import imagesCrew from '../imagesCrew.js';

export default function DouglasHurley() {
  const { douglasHurley } = imagesCrew();

  return (
    <>
      <div className="content-crew">
        <h2>Commander</h2>
        <h1>Douglas Hurley</h1>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA
          astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </p>
      </div>
      <figure className="image-crew">
        <img src={douglasHurley} alt="Commander | Douglas Hurley" />
      </figure>
    </>
  );
}
