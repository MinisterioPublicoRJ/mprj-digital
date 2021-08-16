/* eslint-disable */
import React, { useEffect, useState } from 'react';
import OPENDATA from './MockOpenData';
import Pagination from '../pagination/Pagination';
import OpenDataPosts from './openDataPosts/OpenDataPosts';
import ArrowIcon from '../../utils/ArrowIcon';

import {
  openData,
  openDataCounter,
  inputOpenDataIcon,
  productsFilterTitles,
  filterTitle
} from './OpenData.module.css';

export default function OpenData() {
  const [posts, setPosts] = useState(OPENDATA);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productType, setProductType] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [reverse, setReverse] = useState(false);
  const postPorPage = 2


  const sortBy = (field, reverse, primer) => {
    let key = primer
      ? function (x) {
          return primer(x[field]);
        }
      : function (x) {
          return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      if (field === 'date') {
        a = new Date(key(a));
        b = new Date(key(b));
      } else {
        a = key(a);
        b = key(b);
      }
      return reverse * ((a > b) - (b > a));
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const filteredRepositories = OPENDATA.filter((repositories) =>
        repositories.title
          .toLowerCase()
          .replace(/[\u0300-\u036f]/g, '')
          .includes(productTitle.toLowerCase()),
      );

      setPosts(filteredRepositories);
      setTotalPages(Math.ceil(filteredRepositories.length / postPorPage ));
      setPage(1);
    };
    fetchData();
  }, [productTitle]);

  useEffect(() => {
    const fetchData = async () => {
      const primer = productType === 'score' ? parseInt : null;

      const filteredRepositories = OPENDATA.sort(sortBy(productType, reverse, primer));

      setPosts(filteredRepositories);
      setTotalPages(Math.ceil(filteredRepositories.length / 2));
      setPage(1);
    };
    fetchData();
  }, [productType, reverse]);

  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }

  function setFilterByType(value) {
    value === productType ? setReverse((prevValue) => !prevValue) : setReverse(false);
    setProductType(value);
  }
  const lastPost = page * postPorPage;
  const firstPost = lastPost - postPorPage;
  const currentPost = posts.slice(firstPost, lastPost);

  return (
    <section className={openData} id="repositorios">
      <h1>Repositório de Dados Abertos</h1>
      <p style={{ color: '#9DAFBD', textAlign: 'left'}}>
        Visando o aprimoramento das iniciativas e o fomento ao controle social exercido sociedade,
        as bases de dados e eventuais links de códigos de desenvolvimento estarão disponibilizados
        aqui. As bases de dados, que são o que dá vida aos nossos produtos, podem ter notas
        atribuídas a elas, bem como o apontamento dos critérios que fizeram chegar ao conceito
        atribuído, facilitando sua compreensão e o manuseio por quem quiser. Os dados que não estão
        disponíveis são aqueles que têm proteção legal, como dados pessoais ou sigilosos.
      </p>
      <div className={openDataCounter}>
        <div className={inputOpenDataIcon}>
          <input
            type="text"
            placeholder="Buscar um repositório"
            value={productTitle}
            onChange={(event) => setProductTitle(event.target.value)}
          />
         <ArrowIcon />
        </div>
        <span>{OPENDATA.length} Repositórios</span>
      </div>
      <div className={productsFilterTitles}>
        <p>Ordenar por:</p>
        <button
          type="button"
          onClick={() => setFilterByType('score')} className={filterTitle}>
          Qualidade da Base
        </button>
        <button type="button" onClick={() => setFilterByType('date')} className={filterTitle}>
          Data da Atualização
        </button>
        <button type="button" onClick={() => setFilterByType('datatype')} className={filterTitle}>
          Estrutura do Dado
        </button>
      </div>
      <OpenDataPosts posts={currentPost} />
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={page}
      />
    </section>
  );
}
