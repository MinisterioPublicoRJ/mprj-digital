/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './OpenData.css';
import OPENDATA from './MockOpenData';
import { normalizeString, camelizeString } from '../../utils';
import Pagination from '../pagination/Pagination';
import OpenDataPosts from './openDataPosts/OpenDataPosts';


export default function openData() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postPorPage, setpostPorPage] = useState(1);
  const [totalPages, setTotalPages] = useState(OPENDATA.length);

  useEffect(() => {
    const fetchData = async () => {
      const res = OPENDATA;
      setPosts(res);
    };
    fetchData()
  }, [])


  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }

  const lastPost = page + postPorPage;
  const firstPost = lastPost - postPorPage;
  const currentPost = posts.slice(firstPost, lastPost);

  return (
    <section className="openData" id="repositorios">
      <h1>Repositório de Dados Abertos</h1>
      <p>
        Visando o aprimoramento das iniciativas e o fomento ao controle social exercido sociedade,
        as bases de dados e eventuais links de códigos de desenvolvimento estarão disponibilizados
        aqui. As bases de dados, que são o que dá vida aos nossos produtos, podem ter notas
        atribuídas a elas, bem como o apontamento dos critérios que fizeram chegar ao conceito
        atribuído, facilitando sua compreensão e o manuseio por quem quiser. Os dados que não estão
        disponíveis são aqueles que têm proteção legal, como dados pessoais ou sigilosos.
      </p>
      <div className="openData-counter">{OPENDATA.length} Repositórios</div>
      <OpenDataPosts posts={currentPost} />
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={page}
      />
    </section>
  );
}
