import React, { useState } from 'react';
import styles from './talkToUs.module.css';
import { setDataForm } from '../../api/api';

export default function talkToUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    const data = await setDataForm(formData);
    setSentMessage(data);
    setLoading(false);
    setName('');
    setEmail('');
    setMensagem('');
  }

  return (
    <section className={styles.talkOuter}>
      {/*       <img className={styles.Footer} src={map} alt="mapa" /> */}
      <div className={styles.formOuter}>
        {sentMessage ? (
          <p className={styles.sentMensage}>
            Formulário enviado com sucesso obrigada pelo seu feedback.
          </p>
        ) : (
          <>
            <h1>Sobre o site</h1>
            <p>
              Caso tenha alguma dúvida, problema, sugestões ou elogios sobre o site, use este
              formulário para entrar em contato com a equipe responsável. Em caso de denúncias sobre
              irregularidades, favor clicar no ícone da OUVIDORIA abaixo.
            </p>

            <form onSubmit={handleSubmit} className={styles.formInputsOuter}>
              <div className={styles.formInputsTextOuter}>
                <input
                  type="text"
                  value={name}
                  placeholder="Nome"
                  name="Nome"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                name="mensagem"
                rows="10"
                value={message}
                placeholder="Mensagem"
                onChange={(e) => setMensagem(e.target.value)}
                required
              />
              <button className={styles.talkButton} disabled={loading} type="submit">
                {loading ? 'Enviando' : 'Enviar'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
