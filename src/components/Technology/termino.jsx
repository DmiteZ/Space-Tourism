import React from 'react';
import useScreenSize from '../hooks/use-screen.js';

export default function termino({ technology, subtitulo }) {
  const { titulo, descripcion, imagen } = technology;
  const { width } = useScreenSize();

  return (
    <>
      <figure className="image-technology">
        <img
          src={`${width >= 1024 ? imagen.url[0] : imagen.url[1]}`}
          alt={`${width >= 1024 ? imagen.alt[0] : imagen.alt[1]}`}
        />
      </figure>
      <div className="content-technology">
        <h2>{subtitulo}...</h2>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>
    </>
  );
}
