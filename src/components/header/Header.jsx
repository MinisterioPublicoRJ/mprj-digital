/* eslint-disable max-len */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { BgHeader, NavHeader, ButtonHeader } from './index';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';
import {
  header,
  sectionProducts,
  sectionProductsBtn,
  sectionProductsInput,
  sectionExplore,
  sectionExploreTexts,
  sectionBoxButton,
  sectionBoxLinks,
  sectionBoxLine,
  sectionExploreTextsMain,
  searchButton,
} from './Header.module.css';
import { useHomeContext } from '../../pages/home/HomeContext';

export default function Header() {
  const { setCurrentSearchTerm, searchInputRef } = useHomeContext();
  const [changeData, setchangeData] = useState('MPRJDigital');
  const [productTitle, setProductTitle] = useState('');

  function handleSearch() {
    scroller.scrollTo('repositorios', {
      smooth: true,
      duration: 600,
    });
    searchInputRef.current.focus();
    setCurrentSearchTerm(productTitle);
  }

  return (
    <header className={header}>
      <BgHeader currentTab={changeData} bgList={MOCKPRODUTOSHEADER.map(({ id, imgBg }) => ({ id, imgBg }))} />
      <section className={sectionProducts}>
        <div className={sectionProductsBtn}>
          {MOCKBUTTONHEADER.map(({ id, title, titleBtn }) => (
            <ButtonHeader
              onClick={() => {
                setchangeData(id);
              }}
              key={id}
              title={title}
              titleBtn={titleBtn}
              colorId={id}
              isActive={id === changeData}
            />
          ))}
        </div>

        <NavHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
        <div className={sectionProductsInput}>
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            value={productTitle}
            onChange={({ target: { value } }) => setProductTitle(value)}

          />
          <button type="button" className={searchButton} onClick={handleSearch}>Buscar base de dados</button>
        </div>
      </section>
      <section className={sectionExplore}>
        <div className={sectionExploreTextsMain}>
          <div className={sectionExploreTexts}>
            <h3>O que é o MPRJ Digital?</h3>
            <p>
              Iniciativa de transparência efetiva do MPRJ para demonstrar os resultados de sua
              atividade baseada no modelo de governos digitais.
            </p>
            <div className={sectionBoxButton}>
              <Link
                className={sectionBoxLinks}
                to="/"
                onClick={() => scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })
              }
              >
                <p>Saiba mais</p>
              </Link>
            </div>
          </div>
          <div className={sectionBoxLine} />
        </div>
        <div className={sectionExploreTextsMain}>
          <div className={sectionExploreTexts}>
            <h3>Parceiros e Produtos</h3>
            <p>
              Aqui você encontrará diversos produtos oriundos da política de governos digitais
              empreendida pelo MPRJ.
            </p>
            <div className={sectionBoxButton}>
              <Link
                className={sectionBoxLinks}
                to="/"
                onClick={() => scroller.scrollTo('parceiros', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })
              }
              >
                <p>Parceiros</p>
              </Link>
              <Link
                type="button"
                style={{ marginLeft: 30 }}
                className={sectionBoxLinks}
                to="/"
                onClick={() => scroller.scrollTo('produtos', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })
                }
              >
                <p>Produtos</p>
              </Link>
            </div>
          </div>
          <div className={sectionBoxLine} />
        </div>
        <div className={sectionExploreTextsMain}>
          <div className={sectionExploreTexts}>
            <h3>Repositório de Dados</h3>
            <p>
              Confira a integridade de nossas soluções desde os dados explore e baixe tudo
              o que for interessante para realizar suas pesquisas.
            </p>
            <div className={sectionBoxButton}>
              <Link
                className={sectionBoxLinks}
                to="/"
                onClick={() => scroller.scrollTo('repositorios', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })
                }
              >
                <p>Acessar</p>
              </Link>
            </div>
          </div>
          <div className={sectionBoxLine} />
        </div>
      </section>
    </header>
  );
}
