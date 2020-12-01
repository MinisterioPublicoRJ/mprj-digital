import React from 'react';
import './partners.css';
import { MOCKPARTNERS } from './mockPartners';

export default function Partners() {
  return (
    <section className="section-parceiros">
      <h3>Parceiros</h3>
      <p>
        Setores parceiros diretamente ligados na iniciativa MPRJ Digital. Clique no logo para ver
        mais detalhes do Órgão.
      </p>
      <div className="div-parceiros">
        {MOCKPARTNERS.map((i) => (
          <div className="div-parceiros-imgs" key={i.id}>
            <img alt="Logo-parceiros" src={process.env.PUBLIC_URL + i.img} width="120" />
          </div>
        ))}
      </div>
    </section>
  );
}
