import React, { useState } from 'react';
import './header.css';
import ButtonHeader from './buttonHeader/ButtonHeader';
import NavHeader from './navHeader/NavHeader';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';

export default function Header() {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  return (
    <header className="header">
      <section className="section-products">
        {MOCKBUTTONHEADER.map(({ id, title }) => (
          <ButtonHeader key={id} title={title} />
        ))}
      </section>
      {/* <section className="section-info-products">
        {MOCKPRODUTOSHEADER.map((i) => (
          <p key={i.id} value={i.id}>
            {i.imgIcon1}
            {i.title1}
            {i.imgIcon2}
            {i.title2}
          </p>
        ))}
        <button type="button" value="Search">
          Conheça a Solução
        </button>
      </section> */}
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
