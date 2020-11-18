import { NavLink } from 'react-router-dom';
import './header.css';
import Logo  from '../assets/logo';


export default function Header() {
  return (
    <nav className="navbar">
      <Logo  height={48} width={170} />
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
