/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './Header.css';
import ButtonHeader from './buttonHeaderItem/ButtonHeader';
import NavHeader from './navHeaderItem/NavHeader';
import BgHeader from './bgHeaderItem/BgHeader';

import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';

export default function Header() {
  const [changeData, setchangeData] = useState('MPRJDigital');

  return (
    <header {...MOCKPRODUTOSHEADER.find((img) => img.id === changeData)} className="header">
      <BgHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
      <div className="all-components">
        <section className="section-products">
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
        </section>
        <section className="section-info-products">
          <NavHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
        </section>
      </div>
      <section className="section-explore">
        <h3>Explore</h3>
        <div className="section-info-explore">
          <div className="section-explore-texts">
            <h3>O que é o MPRJ Digital?</h3>
            <p>
              Iniciativa de transparência efetiva do MPRJ para demonstrar os resultados de sua
              atividade baseada no modelo de governos digitais.
            </p>
            {/* <button value="Search" type="button" id="btn-explore">
              Saiba mais
            </button> */}
          </div>
          <div className="section-explore-texts">
            <h3>Parceiros e Produtos</h3>
            <p>
              Aqui você encontrará diversos produtos oriundos da política de governos digitais
              empreendida pelo MPRJ.
            </p>
            <div className="section-box-button">
              {/* <button type="button" id="btn-explore">
                Parceiros
              </button>
              <button className="products-btn-left" type="button" id="btn-explore">
                Produtos
              </button> */}
            </div>
          </div>
          <div className="section-explore-texts">
            <h3>Repositório de Dados</h3>
            <p>
              Confira a integridade de nossas soluções desde os dados e conheça, explore e baixe
              tudo o que for interessante para realizar suas pesquisas, estudos e soluções.
            </p>
            {/* <button type="button" id="btn-explore">
              Acessar
            </button> */}
          </div>
        </div>
      </section>
    </header>
  );
}
