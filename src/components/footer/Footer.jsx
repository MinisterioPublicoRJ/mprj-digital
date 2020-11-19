import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-outer">
      <div className="footer-map" />
      <div className="footer-floating">
        <div className="footer-form-header">
          <h1>Dúvidas e Reclamações?</h1>
          <p>Espaço aberto para ouvir suas dúvidas e comentários a respeito da plataforma, dos produtos, ou de algum dado que está a disposição.</p>
        </div>
        <form className="footer-form-body">
          <input></input>
          <input></input>
          <input></input>
          <button>Enviar</button>
        </form>
      </div>
      <div className="footer-menu">a</div>
    </div>
  );
}
