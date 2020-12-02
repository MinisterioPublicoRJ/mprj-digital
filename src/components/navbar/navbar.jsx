import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Logo from '../../assets/logo';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <Logo alt="logo" />
      <section className="navbar-links">
        <NavLink to="/" end>
          O que é o MPRJ Digital?
        </NavLink>
        <DropdownButton className="dropdow-button" id="dropdown-basic-button" title="Parceiros">
          <Dropdown.Item>
            <NavLink to="/produto">Gate</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/produto">Cenpe</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to="/produto">Csi</NavLink>
          </Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="dropdow-button" id="dropdown-basic-button" title="Produtos">
          <Dropdown.Item href="#/action-1">Integra</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Farol</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ouvidoria</Dropdown.Item>
        </DropdownButton>
        <NavLink to="home">Fale Conosco</NavLink>
        <NavLink to="home">Dúvidas e Reclamações</NavLink>
      </section>
    </navbar>
  );
}
