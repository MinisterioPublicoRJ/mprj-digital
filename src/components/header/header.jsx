import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';

export default function Header() {
  return (
    <header className="header">
      <navbar className="navbar">
        <Logo alt="logo" />
        <section className="navbar-links">
          <NavLink to="/" end>
            O que é o MPRJ Digital?
          </NavLink>
          <NavLink to="home">Parceiros</NavLink>
          <NavLink to="home">Produtos</NavLink>
          <NavLink to="home">Repositórios</NavLink>
          <NavLink to="home">Fale Conosco</NavLink>
          <NavLink to="home">Dúvidas e Reclamações</NavLink>
        </section>
      </navbar>
      <section className="section-produtos">
        <button type="button">Ouvidoria</button>
        <button type="button">MPRJ Digital</button>
        <button type="button">Farol</button>
        <button type="button">Parquet Digital</button>
        <button type="button">Integra</button>
        <button type="button">Painel Saneamento</button>
      </section>
      <section className="section-info-produtos">
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
          </div>
          <div className="section-explore-texts">
            <h3>Parceiros e Produtos</h3>
            <p>
              Aqui você encontrará um leque de ferramentas e também todas as informações do setores
              envolvidos nesta iniciativa.
            </p>
          </div>
          <div className="section-explore-texts">
            <h3>Repositório de Dados</h3>
            <p>
              Conheça, explore e baixe tudo o que for interessante para realizar suas pesquisas e
              estudos aqui no nosso repositório de dados.
            </p>
          </div>
        </div>
      </section>
    </header>
  );
}
