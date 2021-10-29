import React from 'react';
import PARTNERS_DATA_CONST from './partnersDataComponent';

import {
  partnersOuter,
  parceiros,
  partnersHeader,
  partnersItemList,
  cardsActionLinkActive,
} from './Partners.module.css';

export default function Partners() {
  return (
    <section className={partnersOuter} id={parceiros}>
      <div className={partnersHeader}>
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
        <div className={partnersItemList}>
          {PARTNERS_DATA_CONST.map((cards) => (
            <div key={cards.id}>
              <a
                className={cards.actionLink === '' ? cardsActionLinkActive : ''}
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
