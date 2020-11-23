import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo';
import Mock from './mockProdutos';

const mockProdutos = [
  { id: 1, text1: 'Repositório' },
  { id: 2, text2: 'Nome da Base' },
  { id: 3, text3: 'Qualidade da Base' },
  { id: 4, text4: 'Qualidade da Base' },
];

export default function Header() {

  return (
    <header className="header">
      <navbar className="navbar">
        <Logo alt="logo" />
        <section className="navbar-links">
          <NavLink to="/" end >O que é o MPRJ Digital?</NavLink>
          <NavLink to="home">Parceiros</NavLink>
          <NavLink to="home">Produtos</NavLink>
          <NavLink to="home">Repositórios</NavLink>
          <NavLink to="home">Fale Conosco</NavLink>
          <NavLink to="home">Dúvidas e Reclamações</NavLink>
        </section>
      </navbar>
      <section className="section-produtos">
        <button>Ouvidoria</button>
        <button>MPRJ Digital</button>
        <button>Farol</button>
        <button>Parquet Digital</button>
        <button>Integra</button>
        <button>Painel Saneamento</button>
      </section>
      <section className="section-info-produtos">
        {mockProdutos.map(mock => (
          <p key={mock.id} value={mock.id}>
            {mock.text1}
            {mock.text2}
            {mock.text3}
            {mock.text4}
          </p>
        ))}
        <button>Conheça a Solução</button>
      </section>
      <section className="section-explore">
        <h3>Explore</h3>
        <div className="section-info-explore" >
          <div className="section-explore-texts">
            <h3>O que é o MPRJ Digital?</h3>
            <p>Iniciativa para exercer uma transparência efetiva na atuação do MPRJ, espaço único para a prestação de contas com a sociedade.</p>
          </div>
          <div className="section-explore-texts">
            <h3>Parceiros e Produtos</h3>
            <p>Aqui você encontrará um leque de ferramentas e também todas as informações do setores envolvidos nesta iniciativa.</p>
          </div>
          <div className="section-explore-texts">
            <h3>Repositório de Dados</h3>
            <p>Conheça, explore e baixe tudo o que for interessante para realizar suas pesquisas e estudos aqui no nosso repositório de dados.</p>
          </div>
        </div >
      </section >
    </header >
  )
}
