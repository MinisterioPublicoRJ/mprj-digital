/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {
  openDataPostsItens,
  openDataPostsTexts,
  openDataPostsDescription,
  openDataPostsButton,
  openDataPostsAtualizationTitle,
  openDataPostsSubtitle,
  openDataPostsScoreButton,
} from './OpenDataPosts.module.css';

export default function OpenDataPosts({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <section key={item.id} className={openDataPostsItens}>
          <div className={openDataPostsTexts}>
            <button type="button" className={openDataPostsScoreButton}>
              <span>{item.score.toFixed(2)}</span>
            </button>
            <h4>{item.title}</h4>
            <p className={openDataPostsDescription}>{item.description}</p>
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
            <p className={openDataPostsAtualizationTitle} />
            <div className={openDataPostsSubtitle}>
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
              className={openDataPostsButton}
              onClick={(event) => {
                if (item.link) {
                  event.preventDefault();
                  window.open(item.link);
                }
              }}
            >
              <span>Baixar</span>
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
OpenDataPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
