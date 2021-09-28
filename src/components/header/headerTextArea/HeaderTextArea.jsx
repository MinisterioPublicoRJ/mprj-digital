import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './HeaderTextArea.module.css';

export default function HeaderTextArea({ id, title, subtitle, currentTab, actionLink }) {
  const {
    headerTextAreaOuter,
    // headerTextAreaOuterActive,
    // sectionInfoProducts,
    // sectionProductsBtnActive,
    ...colorStyles
  } = styles;

  return (
    <div className={headerTextAreaOuter}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {actionLink && (
        <Link
          to={actionLink}
          className={
            colorStyles[Object.keys(colorStyles).find((className) => className.includes(id))]
          }
        >
          Conheça a ferramenta
        </Link>
      )}
    </div>
  );
}

HeaderTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actionLink: PropTypes.string,
  currentTab: PropTypes.string.isRequired,
};

HeaderTextArea.defaultProps = {
  actionLink: undefined,
};
