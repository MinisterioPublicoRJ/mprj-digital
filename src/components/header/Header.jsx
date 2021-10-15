import React, { useState, useEffect } from 'react';

import { scroller } from 'react-scroll';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { ButtonHeader, HeaderTextArea } from './index';
import HEADER_DATA from './headerData';
import {
  headerOuter,
  searchArea,
  headerMenuArea,
  searchAreaInput,
  searchButton,
  headerBackgroundImage,
  headerBackgroundImageActive,
  headerTexts,
  HeaderTextAreaEntering,
  HeaderTextAreaEntered,
  HeaderTextAreaExiting,
  HeaderTextAreaExited,
} from './Header.module.css';
import { useHomeContext } from '../../pages/home/HomeContext';

export default function Header() {
  const { setCurrentSearchTerm, searchInputRef } = useHomeContext();
  const [currentTab, setCurrentTab] = useState({ id: 'MPRJDigital', index: 0 });
  const [productTitle, setProductTitle] = useState('');

  useEffect(tabTimer, [currentTab]);

  function tabTimer() {
    const timer = setTimeout(() => {
      const nextIndex = currentTab.index + 1 < HEADER_DATA.length ? currentTab.index + 1 : 0;
      const { id } = HEADER_DATA[nextIndex];
      setCurrentTab({ id, index: nextIndex });
    }, 7000);
    return () => clearTimeout(timer);
  }

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
      {/* Render background images that will transition */}
      {HEADER_DATA.map(({ backgroundImage, id, title }) => (
        <img
          aria-hidden="true"
          key={id}
          alt={title}
          src={backgroundImage}
          className={`${headerBackgroundImage} ${
            currentTab.id === id ? headerBackgroundImageActive : ''
          }`}
        />
      ))}
      <section className={headerMenuArea}>
        {HEADER_DATA.map(({ id, title }, index) => (
          <ButtonHeader
            key={id}
            id={id}
            title={title}
            currentTab={currentTab}
            onClick={() => setCurrentTab({ id, index })}
          />
        ))}
      </section>
      <section className={headerTexts}>
        <SwitchTransition component={null}>
          <CSSTransition
            key={currentTab.id}
            timeout={500}
            classNames={{
              enter: HeaderTextAreaEntering,
              enterActive: HeaderTextAreaEntered,
              exit: HeaderTextAreaExiting,
              exitActive: HeaderTextAreaExited,
            }}
          >
            <HeaderTextArea
              key={HEADER_DATA[currentTab.index].id}
              id={HEADER_DATA[currentTab.index].id}
              title={HEADER_DATA[currentTab.index].title}
              subtitle={HEADER_DATA[currentTab.index].subtitle}
              currentTab={currentTab.id}
              actionLink={HEADER_DATA[currentTab.index].link}
            />
          </CSSTransition>
        </SwitchTransition>
      </section>
      <section className={searchArea}>
        <div className={searchAreaInput}>
          {/* TRANSFORMAR EM COMPONENTE DA MAPASTECA */}
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            value={productTitle}
            onChange={({ target: { value } }) => setProductTitle(value)}
          />
          <button type="button" className={searchButton} onClick={handleSearch}>
            Buscar Base de Dados
          </button>
          {/* FIM DO COMPONENTE */}
        </div>
      </section>
    </header>
  );
}
