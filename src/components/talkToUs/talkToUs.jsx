import React from 'react';
import map from '../../assets/map.png';
import styles from './talkToUs.module.css';

export default function talkToUs() {
  return (
    <section className={styles.talkOuter}>
      <img className={styles.Footer} src={map} alt="mapa" />
      <div className={styles.formOuter}>
        <h1>Fale conosco</h1>
        <p>
          Espaço aberto para ouvir suas dúvidas e comentários a respeito da plataforma, dos produtos
          ou de algum dado que está a disposição.
        </p>
        <div className={styles.formInputsOuter}>
          <div className={styles.formInputsTextOuter}>
            <input type="text" value="Nome" />
            <input type="email" value="Email" />
          </div>
          <textarea name="" id="" cols="30" rows="10" value="Mensagem" />
          <button className={styles.talkButton} type="button">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
