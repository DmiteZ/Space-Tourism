import React from 'react';

import imagesCrew from '../imagesCrew.js';

export default function MarkShuttleworth() {
  const { markShuttleworth } = imagesCrew();

  return (
    <>
      <div className="content-crew">
        <h2>Mision specialist</h2>
        <h1>Mark Shuttleworth</h1>
        <p>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the
          Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel
          to space as a space tourist.
        </p>
      </div>
      <figure className="image-crew">
        <img src={markShuttleworth} alt="Commander | Douglas Hurley" />
      </figure>
    </>
  );
}
