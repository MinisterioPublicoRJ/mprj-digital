import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  dropdownOuter,
  dropdownInner,
  dropdownButtons,
  dropdownButtonsWrapper,
  dropdownColumns,
} from './DropdownProducts.module.css';

function otherProductsData(remainingProductsData) {
  const tempArray = [remainingProductsData];
  const mediumColumnSize = 5;
  const columnCount = Math.round(remainingProductsData.length / mediumColumnSize);
  const maxPerColumn = Math.ceil(remainingProductsData.length / columnCount);

  for (let i = 0; i < columnCount; i += 1) {
    const start = i * maxPerColumn;
    tempArray[i] = remainingProductsData.slice(start, start + maxPerColumn);
  }

  return tempArray;
}

export default function DropdownProducts({ productsData, value }) {
  const highlitedCount = 5;
  const highlitedProductsData = productsData ? productsData.slice(0, highlitedCount) : null;

  return (
    <div className={dropdownOuter}>
      <div className={dropdownInner}>
        <h2>{value}</h2>
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
      <div className={dropdownInner}>
        <div className={dropdownColumns}>
          {productsData
            ? otherProductsData(productsData.slice(highlitedCount)).map((item) => (
              <div
                className={dropdownButtonsWrapper}
                key={`column${item[0].name}`}
              >
                {productsData
                  ? item.map(({ title, name }) => (
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
            ))
            : null}
        </div>
      </div>
    </div>
  );
}

DropdownProducts.propTypes = {
  value: PropTypes.string.isRequired,
  productsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};
