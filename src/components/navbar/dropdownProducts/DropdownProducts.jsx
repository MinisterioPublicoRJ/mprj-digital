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
  productsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};
