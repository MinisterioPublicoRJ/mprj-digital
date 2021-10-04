import React from 'react';
import './partners.css';
import PARTNERS_DATA_CONST from './partnersData';

export default function Partners() {
  return (
    <section className="partners-outer" id="parceiros">
      <div className="partners-header">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
        <div className="partners-itemList">
          {PARTNERS_DATA_CONST.map((cards) => (
            <div key={cards.id}>
              <a
                className={`${cards.actionLink === '' ? 'cards-action-link-active' : ''}`}
                target="new"
                rel="noreferrer"
                href={cards.actionLink}
              >
                <img src={cards.img} alt={cards.img} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
