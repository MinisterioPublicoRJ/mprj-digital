/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './OpenData.css';
import OPENDATA from './MockOpenData';
import Pagination from '../pagination/Pagination';
import OpenDataPosts from './openDataPosts/OpenDataPosts';


export default function openData() {
  const [posts, setPosts] = useState(OPENDATA);
  const [page, setPage] = useState(1);
  const [postPorPage, setpostPorPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [productType, setProductType] = useState('');
  //const [search, setSearch] = useState(OPENDATA);
  //const [productName, setProductName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const filteredRepositories = OPENDATA.filter((repositories) => repositories.datatype.includes(productType));
      setPosts(filteredRepositories);
      setTotalPages(Math.ceil(filteredRepositories.length / 2));
      setPage(1);
    };
    fetchData()
  }, [productType])

  /*useEffect(() => {
    const fetchData = async () => {
      const filteredSearch = OPENDATA.filter(
        repositories =>
        repositories.owner 
          .toLowerCase()
          .includes(productName) || 
        repositories.datatype 
          .toLowerCase()
          .includes(productName) || 
        repositories.license
          .toLowerCase()
          .includes(productName) 
      
      );
      setSearch(filteredSearch);
      console.log(filteredSearch)
    };
    fetchData()
  }, [productName])*/


  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }

  const lastPost = page * postPorPage ;
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
      <div className="openData-counter">
        <div class="inputWithIcon">
        <input type="text"
          placeholder="Busque uma base de dados" 
          value={productType}
          onChange={(event) => setProductType(event.target.value) }
        />
        <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <span>{OPENDATA.length} Repositórios</span>
      </div>
      <div className="products-filter-titles">
        <p>Filtrar por:</p>
        <button type="button" onClick={() => setProductType('')} className="filter-title active">
          Qualidade da Base
        </button>
        <button type="button" onClick={() => setProductType('CSV')} className="filter-title">
          Data da Atualização
        </button>
        <button type="button" onClick={() => setProductType('XLSX')} className="filter-title">
          Utilização
        </button>
        <button type="button" onClick={() => setProductType('CSV')} className="filter-title">
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
