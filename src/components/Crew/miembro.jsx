import React from 'react';

export default function Miembro({ datosMiembros }) {
  const { nombre, cargo, descripcion, imagen } = datosMiembros;
  return (
    <>
      <div className="content-crew">
        <h2>{cargo}</h2>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
      </div>
      <figure className="image-crew">
        <img src={imagen.url} alt={imagen.alt} />
      </figure>
    </>
  );
}
