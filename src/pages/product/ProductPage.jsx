import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonProduct from './buttonProduct/ButtonProduct';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';
import BUTTON_PRODUCT_DATA from './buttonProduct/buttonProductData';

export default function Produto() {
  const { key } = useParams();
  const { background, header, title, service, organ } = PRODUCTS_CONST[key];
  const { icon: Icon } = header;
  const [changeData, setchangeData] = useState('Farol');

  return (
    <article className="productPage-outer">
      <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
      <div className="productPage-presentation">
        <Icon />
        <h2>{header.title}</h2>
        <p>{header.subtitle}</p>
      </div>
      <div className="productPage-body-main">
        {BUTTON_PRODUCT_DATA.map(({ id }) => (
          <ButtonProduct
            onClick={() => {
              setchangeData(id);
            }}
            key={id}
            titleBtn={id}
          />
        ))}
        <div className="productPage-bodyFilling">
          <h1>{title}</h1>
          <div className="productPage-body-organ">
            <div className="productPage-body-service">
              <p>{organ}</p>
              <span>Orgão Responsável</span>
            </div>
            <div className="productPage-body-service">
              <p>{service}</p>
              <span>Serviço</span>
            </div>
            <div className="productPage-vara-criminal">
              <button type="button">Vara criminal</button>
              <button type="button">Investigação criminal</button>
              <button type="button">Investigação penal</button>
              <button type="button">Violência Doméstica</button>
              <button type="button">Jecrim</button>
              <button type="button">Auditoria Militar</button>
              <button type="button">Baixar o Farol</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
