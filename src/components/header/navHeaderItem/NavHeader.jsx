import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavHeader.module.css';

export default function NavHeader({ title, subtitle, link, id }) {
  const { sectionInfoProducts, sectionProductsBtnActive, ...colorStyles } = styles;

  return (
    <section className={sectionInfoProducts}>
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
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
