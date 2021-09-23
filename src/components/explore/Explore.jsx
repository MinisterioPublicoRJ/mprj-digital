import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import {
  exploreOuter,
  exploreItemOuter,
  exploreItemInner,
  sectionBoxButton,
  sectionBoxLinks,
  sectionBoxLine,
} from './Explore.module.css';

function Explore() {
  return (
    <section className={exploreOuter}>
      <div className={exploreItemOuter}>
        <div className={exploreItemInner}>
          <h3>O que é o MPRJ Digital?</h3>
          <p>
            Iniciativa de transparência efetiva do MPRJ para demonstrar os resultados de sua
            atividade baseada no modelo de governos digitais.
          </p>
          <div className={sectionBoxButton}>
            <Link
              className={sectionBoxLinks}
              to="/"
              onClick={() => {
                scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                });
              }}
            >
              <p>Saiba mais</p>
            </Link>
          </div>
        </div>
        <div className={sectionBoxLine} />
      </div>
      <div className={exploreItemOuter}>
        <div className={exploreItemInner}>
          <h3>Parceiros e Produtos</h3>
          <p>
            Aqui você encontrará diversos produtos oriundos da política de governos digitais
            empreendida pelo MPRJ.
          </p>
          <div className={sectionBoxButton}>
            <Link
              className={sectionBoxLinks}
              to="/"
              onClick={() => {
                scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                });
              }}
            >
              <p>Parceiros</p>
            </Link>
            <Link
              type="button"
              style={{ marginLeft: 30 }}
              className={sectionBoxLinks}
              to="/"
              onClick={() => {
                scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                });
              }}
            >
              <p>Produtos</p>
            </Link>
          </div>
        </div>
        <div className={sectionBoxLine} />
      </div>
      <div className={exploreItemOuter}>
        <div className={exploreItemInner}>
          <h3>Repositório de Dados</h3>
          <p>
            Confira a integridade de nossas soluções desde os dados explore e baixe tudo o que for
            interessante para realizar suas pesquisas.
          </p>
          <div className={sectionBoxButton}>
            <Link
              className={sectionBoxLinks}
              to="/"
              onClick={() => {
                scroller.scrollTo('repositorios', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                });
              }}
            >
              <p>Acessar</p>
            </Link>
          </div>
        </div>
        <div className={sectionBoxLine} />
      </div>
    </section>
  );
}

export default Explore;
