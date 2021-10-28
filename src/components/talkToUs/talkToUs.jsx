import React from 'react';
import map from '../../assets/map.png';
import styles from './talkToUs.module.css';

export default function talkToUs() {
  return (
    <section className={styles.talkOuter}>
      <img className={styles.Footer} src={map} alt="mapa" />
      <div className={styles.formOuter}>
        <h1>Sobre o site</h1>
        <p>
          Caso tenha alguma dúvida, problema, sugestões ou elogios sobre o site, use este formulário
          para entrar em contato com a equipe responsável. Em caso de denúncias sobre
          irregularidades, favor clicar no ícone da OUVIDORIA abaixo.
        </p>
        <div className={styles.formInputsOuter}>
          <div className={styles.formInputsTextOuter}>
            <input type="text" value="" placeholder="Nome" />
            <input type="email" value="" placeholder="Email" />
          </div>
          <textarea name="" id="" cols="30" rows="10" value="" placeholder="Mensagem" />
          <button className={styles.talkButton} type="button">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
