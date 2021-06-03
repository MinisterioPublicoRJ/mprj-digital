import React from 'react';
import { Link } from 'react-router-dom';

import './partners.css';
import { PARNERS_CONST } from './partnersData';

export default function Partners() {
  return (
    <section className="partners-outer" id="parceiros">
      <div className="partners-header">
        <h1>Parceiros</h1>
        <h2>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</h2>
      </div>
      <div className="partners-itemList">
        {PARNERS_CONST.map(({ id, img }) => (
          <Link
            to="/"
            className="partner-itemAnchor"
            key={id}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </section>
  );
}
