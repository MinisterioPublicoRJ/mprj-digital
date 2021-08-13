/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {
  openDataItens,
  mainInfos,
  openDataDescription,
  openDataButton,
} from './OpenDataPosts.module.css';

export default function OpenDataPosts({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <section key={item.id} className={openDataItens}>
          <div className={mainInfos}>
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
          </div>
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
        </section>
      ))}
    </>
  );
}
OpenDataPosts.propTypes = {
  posts: PropTypes.node.isRequired,
};
