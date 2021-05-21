import React from 'react';
import PropTypes from 'prop-types';
import './OpenDataPosts.css';

export default function OpenDataPosts({ posts }) {
  return (
    <section className="openData-title">
      {posts.map((item) => (
        <section key={item.id} className="openData-item">
          <div className="main-infos">
            <p className="openData-score">{item.score.toFixed(2)}</p>
            <h4>{item.title}</h4>
            <p className="openData-description">{item.description}</p>
            <p>
              <span>Setor Responsável:</span>
              {item.owner}
            </p>
            <p>
              <span>Atualização:</span>
              {' '}
              {new Date(item.date).toLocaleDateString()}
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
            className="openData-button"
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
    </section>
  );
}
OpenDataPosts.propTypes = {
  posts: PropTypes.func.isRequired,
};
