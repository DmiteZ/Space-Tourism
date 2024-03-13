import React from 'react';
import { useParams } from 'react-router-dom';
import { technology } from '../../informacion.json';
import Termino from './termino';
import NavTechnology from './nav-technology.jsx';

export default function terminos() {
  const { id: paramsid } = useParams();
  const { subtitulo, terminos } = technology;
  const terminoActual = Object.values(terminos).find((termino) => termino.id === paramsid);
  return (
    <article className="article-technology w-full h-full">
      <NavTechnology baseRoute={'/technology'} />
      {terminoActual && <Termino technology={terminoActual} subtitulo={subtitulo} />}
    </article>
  );
}
