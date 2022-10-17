import React from 'react';

import imagesCrew from '../imagesCrew.js';

export default function AnoushehAnsari() {
  const { anoushehAnsari } = imagesCrew();

  return (
    <>
      <div className="content-crew">
        <h2>Flight engineer</h2>
        <h1>Anousheh Ansari</h1>
        <p>
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari
          was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS,
          and the first Iranian in space.
        </p>
      </div>
      <figure className="image-crew">
        <img src={anoushehAnsari} alt="Flight Engineer | Anousheh Ansari" />
      </figure>
    </>
  );
}
