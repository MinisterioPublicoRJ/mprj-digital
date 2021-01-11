/* eslint-disable */
import React, { useState } from 'react';
import './OpenData.css';
import OPENDATA from './MockOpenData';
import { normalizeString, camelizeString } from '../../utils';
import Pagination from '../pagination/Pagination';


export default function Product() {
  const [ filterString: string, setFilterString ] = useState('');
  const [ filterChoice: string, setFilterChoice ] = useState('');

  function handleInputChange(e){
    setFilterString(e.target.value);
  }

  function handleFilterChoice(e){
    setFilterChoice(camelizeString(normalizeString(e.target.innerText)));
  }

  function handlePageClick(page) {
    return page;
  }

  const filteredItens = OPENDATA.filter(item => {
    const query = normalizeString(filterString);
    if (filterChoice === 'qualidadeDaBase') {
      return item.score >= filterString;
    }

    if (filterChoice === 'dataDeAtualizacao' && filterString !== '' && filterString.length >= 4) {
      if (filterString.length == 4) {
        return new Date(item.date) >= new Date(filterString, '0', '01');
      }
      var dt = filterString.replace( /(\d{2}).?[-/]?(\d{2}).?[-/.]?(\d{4})/, "$1-$2-$3").split("-");
      return new Date(item.date) >= new Date(dt[2], dt[1]-1, dt[0]);
    }

    if (filterChoice === 'utilizacao') {
      return normalizeString(item.purpose).indexOf(query) >= 0;

    }

    if (filterChoice === 'estruturaDoDado') {
      return normalizeString(item.datatype).indexOf(query) >= 0;
    }
    
    return (
      normalizeString(item.title).indexOf(query) >= 0 ||
      normalizeString(item.description).indexOf(query) >= 0 || 
      normalizeString(item.owner).indexOf(query) >= 0 ||
      normalizeString(item.purpose).indexOf(query) >= 0 || 
      normalizeString(item.datatype).indexOf(query) >= 0 || 
      normalizeString(item.license).indexOf(query) >= 0 
    );
  });

  return (
    <div className="openData">
      <div className="openData-title">
        <h2>Repositório de Dados Abertos</h2>
        <h3>
          Aqui você encontrará as bases de dados que utilizamos para a confecção dos nosso produtos
          e uma variedade enorme de insumos para pesquisas e estudo.
        </h3>
      </div>
      <div className="openData-search">
        <input type="text" placeholder="Busque uma base de dados" onChange={(e) => handleInputChange(e)}/>
        <div className="openData-counter">{Object.keys(filteredItens).length} Repositórios</div>
      </div>
      <div className="openData-linkToPanel">
            <a href="https://github.com/MinisterioPublicoRJ" target="_blank">
            Visualizar no painel de repositório
            </a>
      </div>
      <div className="openData-filter">
        <label>Filtrar por:</label>
        <navbar>
          <ul>
            <li onClick={(e) => {setFilterChoice('');}} className={filterChoice == '' ? 'li-active' : null}>Tudo</li>
            <li onClick={(e) => {handleFilterChoice(e);}} className={filterChoice == 'qualidadeDaBase' ? 'li-active' : null}>Qualidade da Base</li>
            <li onClick={(e) => {handleFilterChoice(e);}} className={filterChoice == 'dataDeAtualizacao' ? 'li-active' : null}>Data de Atualização</li>
            <li onClick={(e) => {handleFilterChoice(e);}} className={filterChoice == 'utilizacao' ? 'li-active' : null}>Utilização</li>
            <li onClick={(e) => {handleFilterChoice(e);}} className={filterChoice == 'estruturaDoDado' ? 'li-active' : null}>Estrutura do Dado</li>
          </ul>
        </navbar>
      </div>
      {filteredItens.map((item) => 
        <section className="openData-item">
          <h4>{item.title}</h4>
          <description>{item.description}</description>
          <owner><label>Setor Responsável:</label> {item.owner}</owner>
          <date><label>Atualização:</label> {new Date(item.date).toLocaleDateString()}</date>
          <score className="openData-score">{item.score.toFixed(2)}</score>
          <hr />
          <purpose><label>Utilização:</label> {item.purpose}</purpose>
          <datatype><label>Estrutura do Dado:</label> {item.datatype}</datatype>
          <license><label>Licença:</label> {item.license}</license>
          <button type="button" className="openData-button" onClick={event => {
            if (item.link) {
              event.preventDefault();
              window.open(item.link);
              return;
            }
          }}
          >
            Baixar
          </button>
        </section>
      )}
      {filteredItens.length == 0 &&
        <section className="openData-item">
        <h4>Nenhum resultado encontrado.</h4>
        </section>
      }
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={1}
        currentPage={1}
      />
    </div>
  );
}
