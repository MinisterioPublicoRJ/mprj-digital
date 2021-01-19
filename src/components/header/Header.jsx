/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './Header.css';
import ButtonHeader from './buttonHeaderItem/ButtonHeader';
import NavHeader from './navHeaderItem/NavHeader';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';

export default function Header() {
  const [changeData, setchangeData] = useState('MPRJDigital');

  return (
    <header className="header" id="animeRight">
      <section className="section-products">
        {MOCKBUTTONHEADER.map(({ id, title }) => (
          <ButtonHeader onClick={() => setchangeData(id)} key={id} title={title} />
        ))}
      </section>
      <section className="section-info-products">
        <NavHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
      </section>
      <section className="section-explore">
        <h3>Explore</h3>
        <div className="section-info-explore">
          <div className="section-explore-texts">
            <h3>O que é o MPRJ Digital?</h3>
            <p>
              Iniciativa para exercer uma transparência efetiva na atuação do MPRJ, espaço único
              para a prestação de contas com a sociedade.
            </p>
            {/* <button value="Search" type="button" id="btn-explore">
              Saiba mais
            </button> */}
          </div>
          <div className="section-explore-texts">
            <h3>Parceiros e Produtos</h3>
            <p>
              Aqui você encontrará um leque de ferramentas e também todas as informações do setores
              envolvidos nesta iniciativa.
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
              Conheça, explore e baixe tudo o que for interessante para realizar suas pesquisas e
              estudos aqui no nosso repositório de dados.
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
