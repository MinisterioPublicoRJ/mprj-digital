import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';

import {
  dropdownWrapper,
  dropdownHighlights,
  dropdownOtherProducts,
  dropdownButtons,
  dropdownButtonsWrapper,
} from './DropdownProducts.module.css';

export default function DropdownProducts({ productsData }) {
  const highlitedCount = 2;
  const highlitedProductsData = productsData ? productsData.slice(0, highlitedCount) : null;
  const otherProductsData = productsData ? productsData.slice(highlitedCount) : null;

  return (
    <div className={dropdownWrapper}>
      <div className={dropdownHighlights}>
        <h2>Produtos em destaque</h2>
        <div className={dropdownButtonsWrapper}>
          {highlitedProductsData
            ? highlitedProductsData.map(({ title, name }) => (
              <NavLink
                key={title}
                to={`/produto/${name}`}
                type="button"
                className={dropdownButtons}
              >
                {title}
              </NavLink>
            ))
            : null}
        </div>
      </div>
      <div className={dropdownOtherProducts}>
        <h2>Outros produtos</h2>
        <div className={dropdownButtonsWrapper}>
          {otherProductsData
            ? otherProductsData.map(({ title, name }) => (
              <NavLink
                key={title}
                to={`/produto/${name}`}
                type="button"
                className={dropdownButtons}
              >
                {title}
              </NavLink>
            ))
            : null}
        </div>
      </div>
    </div>
  );
  /*
  {productsData
    ? productsData.map(({ title, name }) => (
      <NavLink
        key={title}
        to={`/produto/${name}`}
        type="button"
        className={navbarDropbtn}
      >
        {title}
      </NavLink>
    ))
    : null}
  */
}

DropdownProducts.propTypes = {
  productsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};
