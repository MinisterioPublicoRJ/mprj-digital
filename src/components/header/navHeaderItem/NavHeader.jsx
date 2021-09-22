import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavHeader.module.css';

export default function NavHeader({ title, subtitle, link, id, currentTab }) {
  const {
    sectionInfoProductsActive,
    sectionInfoProducts,
    sectionProductsBtnActive,
    ...colorStyles
  } = styles;
  console.log(title, id);
  return (
    <section className={`${sectionInfoProducts} ${title ? sectionInfoProductsActive : ''}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {link ? (
        <a
          href={link}
          className={
            colorStyles[Object.keys(colorStyles).find((className) => className.includes(id))]
          }
        >
          Conheça a ferramenta
        </a>
      ) : null}
    </section>
  );
}

NavHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string,
  id: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
};

NavHeader.defaultProps = {
  link: undefined,
};
