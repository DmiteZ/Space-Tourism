import React from 'react';

export default function Destinos({ destination }) {
  const { titulo, descripcion, imagen, distancia, tiempo } = destination;

  return (
    <>
      <figure className="image-destination">
        <img className="size-image" src={imagen.url} alt={imagen.alt} />
      </figure>

      <div className="content-destination">
        <h1>{titulo}</h1>
        <p>{descripcion}</p>

        <hr className="w-full my-5" />

        <div className="content-distance-destination uppercase">
          <div className="grid gap-1">
            <h3 className="text-sm">{distancia.titulo}</h3>
            <h2 className="text-3xl">{distancia.descripcion}</h2>
          </div>

          <div className="grid gap-1">
            <h3 className="text-sm">{tiempo.titulo}</h3>
            <h2 className="text-3xl">{tiempo.descripcion}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
