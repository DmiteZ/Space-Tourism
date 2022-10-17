import React from 'react';

import { imagesLaunchVehicle } from '../imagesTechnology.js';

import useScreenSize from '../../../useScreen.js';

export default function LaunchVehicle() {
  const { width } = useScreenSize();

  const { launchVehicleImg, launchVehicleImg2 } = imagesLaunchVehicle();

  return (
    <>
      <figure className="image-technology">
        <img src={`${width >= 1024 ? launchVehicleImg2 : launchVehicleImg}`} alt="Launch Vehicle" />
      </figure>
      <div className="content-technology">
        <h2>The terminology...</h2>
        <h1>Launch vehicle</h1>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
          from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket
          is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring
          sight on the launch pad!
        </p>
      </div>
    </>
  );
}
