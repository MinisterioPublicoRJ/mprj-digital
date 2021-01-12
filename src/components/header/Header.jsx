import React from 'react';
import './header.css';
import ButtonHeader from './buttonHeader/ButtonHeader';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';

export default function Header() {
  return (
    <header className="header">
      <section className="section-products">
        {MOCKBUTTONHEADER.map((i) => (
          <ButtonHeader key={i.id} title={i.title} />
        ))}
      </section>
      <section className="section-info-products">
        {MOCKPRODUTOSHEADER.map((i) => (
          <p key={i.id} value={i.id}>
            {i.title1}
            {i.title2}
            {i.title3}
            {i.title4}
          </p>
        ))}
        <button type="button">Conheça a Solução</button>
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
            <button type="button">Saiba mais</button>
          </div>
          <div className="section-explore-texts">
            <h3>Parceiros e Produtos</h3>
            <p>
              Aqui você encontrará um leque de ferramentas e também todas as informações do setores
              envolvidos nesta iniciativa.
            </p>
            <button type="button">Parceiros</button>
            <button className="products-btn-left" type="button">
              Produtos
            </button>
          </div>
          <div className="section-explore-texts">
            <h3>Repositório de Dados</h3>
            <p>
              Conheça, explore e baixe tudo o que for interessante para realizar suas pesquisas e
              estudos aqui no nosso repositório de dados.
            </p>
            <button type="button">Acessar</button>
          </div>
        </div>
      </section>
    </header>
  );
}
