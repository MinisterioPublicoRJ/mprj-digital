/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';

import {
  dropdownOuter,
  dropdownInner,
  dropdownButtons,
  dropdownButtonsWrapper,
} from './DropdownProducts.module.css';

export default function DropdownProducts({ productsData }) {
  /* function otherProductsData(remainingProductsData) {
    const tempArray = [remainingProductsData];
    const mediumColumnSize = 5;
    const columnCount = Math.round(remainingProductsData.length / mediumColumnSize);
    const maxPerColumn = Math.ceil(remainingProductsData.length / columnCount);

    for (let i = 0; i < columnCount; i += 1) {
      const start = i * maxPerColumn;
      tempArray[i] = remainingProductsData.slice(start, start + maxPerColumn);
    }

    return tempArray;
  } */
  return (
    <div className={dropdownOuter}>
      <div className={dropdownInner}>
        <h2>Produtos</h2>
        <div className={dropdownButtonsWrapper}>
          {productsData
            ? productsData.map(({ title, name }) => (
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
}

DropdownProducts.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};
