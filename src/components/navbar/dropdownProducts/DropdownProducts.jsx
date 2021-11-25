import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { object } from 'prop-types';

import {
  navbarDropbtn,
} from './DropdownProducts.module.css';

export default function DropdownProducts({ productsData }) {
  return (
    <div>
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
