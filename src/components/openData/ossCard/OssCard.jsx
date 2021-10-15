import React from 'react';
import PropTypes from 'prop-types';
import {
  openDataItens,
  openDatatexts,
  openDataDescription,
  openDataButton,
  atualizationTitle,
  openDataSubtitle,
  openDataScoreButton,
  openDataLicenseCasing,
} from './OssCard.module.css';

export default function OssCard({ ossObj }) {
  return (
    <>
      <section className={openDataItens}>
        <div className={openDatatexts}>
          <button type="button" className={openDataScoreButton}>
            <span>{ossObj.score_dados}</span>
          </button>
          <h4>{ossObj.title}</h4>
          <p className={openDataDescription}>{ossObj.description}</p>
          <p>
            <span>Setor Responsável: </span>
            {' '}
            {ossObj.owner}
          </p>
          <p>
            <span>Atualização: </span>
            {ossObj.lastUpdated}
          </p>
          <p className={atualizationTitle} />
          <div className={openDataSubtitle}>
            <p>
              <span>Utilização: </span>
              {' '}
              {ossObj.usage}
            </p>
            <p>
              <span>Estrutura do Dado: </span>
              {' '}
              {ossObj.format}
            </p>
            <p>
              <span>Licença: </span>
              {' '}
              <t className={openDataLicenseCasing}>{ossObj.license}</t>
            </p>
          </div>
          <button
            type="button"
            className={openDataButton}
            onClick={(event) => {
              if (ossObj.downloadLink) {
                event.preventDefault();
                window.open(ossObj.downloadLink);
              }
            }}
          >
            <span>Baixar</span>
          </button>
        </div>
      </section>
    </>
  );
}

OssCard.propTypes = {
  ossObj: PropTypes.shape().isRequired,
};
