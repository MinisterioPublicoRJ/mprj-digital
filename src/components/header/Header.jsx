/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './Header.css';
import { BgHeader, NavHeader, ButtonHeader } from './index';

import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';

export default function Header() {
  const [changeData, setchangeData] = useState('MPRJDigital');

  return (
    <header className="header">
      <BgHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
      <section className="section-products">
        <div className="section-products-btn">
          {MOCKBUTTONHEADER.map(({ id, title, titleBtn }) => (
            <ButtonHeader
              onClick={() => {
                setchangeData(id);
              }}
              key={id}
              title={title}
              titleBtn={titleBtn}
            />
          ))}
        </div>
        <NavHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
      </section>
      <section className="section-explore">
        <div className="section-explore-texts">
          <h3>O que é o MPRJ Digital?</h3>
          <p>
            Iniciativa de transparência efetiva do MPRJ para demonstrar os resultados de sua
            atividade baseada no modelo de governos digitais.
          </p>
        </div>
        <div className="section-explore-texts">
          <h3>Parceiros e Produtos</h3>
          <p>
            Aqui você encontrará diversos produtos oriundos da política de governos digitais
            empreendida pelo MPRJ.
          </p>
          <div className="section-box-button" />
        </div>
        <div className="section-explore-texts">
          <h3>Repositório de Dados</h3>
          <p>
            Confira a integridade de nossas soluções desde os dados e conheça, explore e baixe tudo
            o que for interessante para realizar suas pesquisas, estudos e soluções.
          </p>
        </div>
      </section>
    </header>
  );
}
