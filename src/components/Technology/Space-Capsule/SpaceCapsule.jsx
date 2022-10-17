import React from 'react';

import { imagesSpaceCapsule } from '../imagesTechnology.js';

import useScreenSize from '../../../useScreen.js';

export default function SpaceCapsule() {
  const { width } = useScreenSize();

  const { spaceCapsuleImg, spaceCapsuleImg2 } = imagesSpaceCapsule();

  return (
    <>
      <figure className="image-technology">
        <img src={`${width >= 1024 ? spaceCapsuleImg2 : spaceCapsuleImg}`} alt="Space Capsule" />
      </figure>
      <div className="content-technology">
        <h2>The terminology...</h2>
        <h1>Space capsule</h1>
        <p>
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to
          reenter the Earths atmosphere without wings. Our capsule is where you will spend your time
          during the flight. It includes a space gym, cinema, and plenty of other activities to keep
          you entertained.
        </p>
      </div>
    </>
  );
}
