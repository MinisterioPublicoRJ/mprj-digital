import React from 'react';
import './talkToUs.css';
import map from '../../assets/map.png';

export default function talkToUs() {
  return (
    <section className="talk-outer">
      <img className="logo-footer" src={map} alt="mapa" />
      <div className="form-outer">
        <h1>Fale conosco</h1>
        <p>
          Espaço aberto para ouvir suas dúvidas e comentários a respeito da plataforma, dos produtos
          ou de algum dado que está a disposição.
        </p>
        <div className="form-inputs-outer">
          <div className="form-inputs-text-outer">
            <input type="text" value="Nome" />
            <input type="email" value="Email" />
          </div>
          <textarea name="" id="" cols="30" rows="10" value="Mensagem" />
          <button className="talk-button" type="button">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
