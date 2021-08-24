/* eslint-disable */
import React, { useState } from 'react';
import { BgHeader, NavHeader, ButtonHeader } from './index';
import ArrowIcon from '../../utils/ArrowIcon';
import { MOCKPRODUTOSHEADER } from './mockProdutosHeader';
import { MOCKBUTTONHEADER } from './mockButtonHeader';
import {
  header,
  sectionProducts,
  sectionProductsBtn,
  sectionProductsInput,
  sectionProductsArrow
} from './Header.module.css';

export default function Header() {
  const [changeData, setchangeData] = useState('MPRJDigital');

  return (
    <header className={header}>
      <BgHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
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
            />
          ))}
        </div>
        <NavHeader {...MOCKPRODUTOSHEADER.find((btn) => btn.id === changeData)} />
        <div className={sectionProductsInput}> 
          <i className="fa fa-search" aria-hidden="true" />
          <input
            type="text"
            value=''
            //onChange={(event) => setProductTitle(event.target.value)}
            
          />
         <p>Buscar base dados</p>
        </div>
      </section>
      {/*<section className="section-explore">
        <div className="section-explore-texts">
          <h3>O que é o MPRJ Digital?</h3>
          <p>
            Iniciativa de transparência efetiva do MPRJ para demonstrar os resultados de sua
            atividade baseada no modelo de governos digitais.
          </p>
        </div>
        <div className="section-explore-texts">
          <h3>Parceiros e Produtos</h3>
          <p>
            Aqui você encontrará diversos produtos oriundos da política de governos digitais
            empreendida pelo MPRJ.
          </p>
          <div className="section-box-button" />
        </div>
        <div className="section-explore-texts">
          <h3>Repositório de Dados</h3>
          <p>
            Confira a integridade de nossas soluções desde os dados e conheça, explore e baixe tudo
            o que for interessante para realizar suas pesquisas, estudos e soluções.
          </p>
        </div>
        </section>*/}
    </header>
  );
}
