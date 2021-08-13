/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {
  openDataItens,
  openDatatexts,
  openDataDescription,
  openDataButton,
  atualizationTitle,
  openDataSubtitle,
} from './OpenDataPosts.module.css';

export default function OpenDataPosts({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <section key={item.id} className={openDataItens}>
          <div className={openDatatexts}>
            <button type="button">
              {item.score.toFixed(2)}
            </button>
            <h4>{item.title}</h4>
            <p className={openDataDescription}>{item.description}</p>
            <p>
              <span>Setor Responsável:</span>
              {' '}
              {item.owner}
            </p>
            <p>
              <span>Atualização:</span>
              {' '}
              {Intl.DateTimeFormat('pt-br', { timeZone: 'UTC' }).format(new Date(item.date))}
            </p>
            <p className={atualizationTitle} />
            <div className={openDataSubtitle}>
              <p>
                <span>Utilização:</span>
                {' '}
                {item.purpose}
              </p>
              <p>
                <span>Estrutura do Dado:</span>
                {' '}
                {item.datatype}
              </p>
              <p>
                <span>Licença:</span>
                {' '}
                {item.license}
              </p>
            </div>
            <button
              type="button"
              className={openDataButton}
              onClick={(event) => {
                if (item.link) {
                  event.preventDefault();
                  window.open(item.link);
                }
              }}
            >
              Baixar
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
OpenDataPosts.propTypes = {
  posts: PropTypes.node.isRequired,
};
