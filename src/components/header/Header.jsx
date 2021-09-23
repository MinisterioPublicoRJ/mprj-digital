/* eslint-disable */
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { scroller } from 'react-scroll';
import { ButtonHeader } from './index';
// import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
// import { MOCKBUTTONHEADER } from './mockButtonHeader';
import HEADER_DATA from './headerData';
import {
  headerOuter,
  searchArea,
  headerMenuArea,
  searchAreaInput,
  // sectionExplore,
  // sectionExploreTexts,
  // sectionBoxButton,
  // sectionBoxLinks,
  // sectionBoxLine,
  // sectionExploreTextsMain,
  searchButton,
} from './Header.module.css';
import { useHomeContext } from '../../pages/home/HomeContext';

export default function Header() {
  const { setCurrentSearchTerm, searchInputRef } = useHomeContext();
  const [currentTab, setCurrentTab] = useState({ id: 'MPRJDigital', index: 0 });
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
    <header className={headerOuter}>
      <div className={headerMenuArea}>
        {HEADER_DATA.map(({ id, title }, i) => (
          <ButtonHeader
            key={id}
            id={id}
            title={title}
            currentTab={currentTab}
            onClick={() => setCurrentTab({ id, index: i })}
          />
        ))}
      </div>
      <section className={searchArea}>
        {/* <NavHeader currentTab={changeData} {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} /> */}
        <div className={searchAreaInput}>
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            value={productTitle}
            onChange={({ target: { value } }) => setProductTitle(value)}
          />
          <button type="button" className={searchButton} onClick={handleSearch}>Buscar Base de Dados</button>
        </div>
      </section>
      {/* <BgHeader currentTab={changeData} bgList={MOCKPRODUTOSHEADER.map(({ id, imgBg }) => ({ id, imgBg }))} />
 */}
    </header>
  );
}
