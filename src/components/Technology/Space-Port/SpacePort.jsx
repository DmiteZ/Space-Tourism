import React from 'react';

import { imagesSpaceport } from '../imagesTechnology.js';

import useScreenSize from '../../../useScreen.js';

export default function SpacePort() {
  const { width } = useScreenSize();

  const { spacePortImg, spacePortImg2 } = imagesSpaceport();

  return (
    <>
      <figure className="image-technology">
        <img src={`${width >= 1024 ? spacePortImg2 : spacePortImg}`} alt="Space Port" />
      </figure>
      <div className="content-technology">
        <h2>The terminology...</h2>
        <h1>Spaceport</h1>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to
          the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our
          spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>
    </>
  );
}
