import { NavLink } from 'react-router-dom';
import './header.css';


export default function Header() {
  return (
    <nav className="navbar">
      <p>Logo</p>
      <div className="navbar-links">
        <NavLink to="/">O que é o MPRJ Digital?</NavLink>
        <NavLink to="home">Parceiros</NavLink>
        <NavLink to="home">Produtos</NavLink>
        <NavLink to="home">Repositórios</NavLink>
        <NavLink to="home">Fale Conosco</NavLink>
        <NavLink to="home">Dúvidas e Reclamações</NavLink>
      </div>
    </nav>
  )
}
