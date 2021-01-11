import React from 'react';
import { Link } from 'react-router-dom';

import './partners.css';
import { PARNERS_CONST } from './partnersData';

export default function Partners() {
  return (
    <section className="partners-outer">
      <div className="partners-header">
        <h1>Parceiros</h1>
        <p>
          Setores parceiros diretamente ligados na iniciativa MPRJ Digital. Clique no logo para ver
          mais detalhes do Órgão.
        </p>
      </div>
      <div className="partners-itemList">
        {PARNERS_CONST.map(({ id, img }) => (
          <Link
            to="/parceiros"
            className="partner-itemAnchor"
            key={id}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </section>
  );
}
