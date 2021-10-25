import React from 'react';
// import PropTypes from 'prop-types';
import '../PartnerPage.css';
import { Link, useLocation } from 'react-router-dom';

export default function FormPartner() {
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="partner-page-title">
      <h5>Quer entrar em contato direto conosco? Escreva aqui.</h5>
      <div className="partner-dynamic-content">
        <navbar className="partner-page-navigation">
          <div>
            <Link
              style={{ marginLeft: 22 }}
              to="#cidadao"
              className={` ${
                location.hash === '#cidadao' || location.hash === '' ? 'help-navButtons-active' : ''
              }`}
            >
              Cidadão
              <div />
            </Link>
          </div>
          <div>
            <Link
              style={{ marginLeft: -13 }}
              to="#membro"
              className={` ${location.hash === '#membro' ? 'help-navButtons-active' : ''}`}
            >
              Membro/Servidor
              <div />
            </Link>
          </div>
        </navbar>
        <form className="partner-contact-form" onSubmit={handleSubmit}>
          <div className="inputs-box">
            <label htmlFor="nome">
              Nome
              <input type="text" id="nome" name="nome" />
            </label>
            <label htmlFor="email">
              E-mail
              <input type="text" id="email" name="email" />
            </label>
          </div>
          <div className="inputs-box">
            <label htmlFor="dataNascimento">
              Data de nascimento
              <input type="text" id="dataNascimento" name="dataNascimento" />
            </label>
            <label htmlFor="sexo">
              Sexo
              <input type="text" id="sexo" name="sexo" />
            </label>
            <label htmlFor="profissao">
              Profissão / Ocupação
              <input type="text" id="profissao" name="profissao" />
            </label>
          </div>
          {location.hash === '#membro' && (
            <>
              <label htmlFor="profissao">
                Cargo / Setor de atuação
                <input type="text" id="profissao" name="profissao" />
              </label>
              <label htmlFor="profissao">
                Matrícula ativa
                <input type="text" id="profissao" name="profissao" />
              </label>
            </>
          )}
          <div className="inputs-box">
            <textarea placeholder="No que podemos melhorar?" />
          </div>
        </form>
        <button type="button" className="partner-contact-button">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}

FormPartner.propTypes = {};
