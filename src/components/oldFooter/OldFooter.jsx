import React from 'react';
import './OldFooter.css';
import Logo from '../../assets/logo';

export default function oldFooter() {
  function handleFormSubmit() {
    alert('Mensagem enviada com sucesso!');
  }

  return (
    <div className="oldFooter-outer">
      <div className="oldFooter-map" />
      <div className="oldFooter-floating">
        <div className="oldFooter-form-header">
          <h1>Dúvidas e Reclamações?</h1>
          <p>
            Espaço aberto para ouvir suas dúvidas e comentários a respeito da plataforma, dos
            produtos, ou de algum dado que está a disposição.
          </p>
        </div>
        <form className="oldFooter-form-body">
          <div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="Mensagem" />
          </div>
          <div>
            <button type="button" onClick={() => handleFormSubmit()}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="oldFooter-menu">
        <div className="oldFooter-menu-column">
          <Logo alt="Logo MPRJ Digital" />
          <span className="create-space">© Ministério Público do Estado do Rio de Janeiro</span>
          <div className="oldFooter-menu-icons">
            <a
              href="https://twitter.com/MP_RJ"
              target="_blank"
              rel="noreferrer"
              className="oldFooter-menu-icon-twitter"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/mprj.oficial/"
              target="_blank"
              rel="noreferrer"
              className="oldFooter-menu-icon-instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/MPRJ.Oficial/"
              target="_blank"
              rel="noreferrer"
              className="oldFooter-menu-icon-facebook"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="oldFooter-menu-column">
          <h3>PRODUTOS EM DESTAQUE</h3>
          <a href="./#">Parquet Digital</a>
          <a href="./#">Farol</a>
          <a href="/#">Integra</a>
          <a href="/#">Radar</a>
          <a href="/#">Painel do Saneamento</a>
          <a href="/#">Painel de Compras</a>
        </div>
        <div className="oldFooter-menu-column">
          <h3>MPRJ DIGITAL</h3>
          <a href="/#">Quem Somos?</a>
          <a href="/#">Parceiros</a>
          <a href="/#">Contato</a>
        </div>
        <div className="oldFooter-menu-column">
          <h3>OUVIDORIA</h3>
          <a
            href="http://www.mprj.mp.br/comunicacao/ouvidoria"
            target="_blank"
            rel="noreferrer"
            className="create-space"
          >
            Dúvidas e Reclamações
          </a>
          <a
            href="http://www.mprj.mp.br/comunicacao/ouvidoria"
            target="_blank"
            rel="noreferrer"
            className="create-space"
          >
            <img src="./Ouvidoria.png" alt="Logo Ouvidoria MPRJ" />
          </a>
        </div>
      </div>
    </div>
  );
}
