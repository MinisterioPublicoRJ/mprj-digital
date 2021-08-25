import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavHeader.module.css';

export default function NavHeader({ title, subtitle, link, colorId, isActive }) {
  const { sectionInfoProducts, sectionProductsBtnActive, ...colorStyles } = styles;
  console.log(sectionInfoProducts);

  return (
    <section className={`${sectionInfoProducts} ${isActive ? sectionProductsBtnActive : ''}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <a target="new" href={link}>
        <button
          type="button"
          className={
            colorStyles[Object.keys(colorStyles).find((className) => className.includes(colorId))]
          }
        >
          Conheça a ferramenta
        </button>
      </a>
    </section>
  );
}
NavHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  colorId: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
};
