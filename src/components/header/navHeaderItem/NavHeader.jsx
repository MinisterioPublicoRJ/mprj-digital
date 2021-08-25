import React from 'react';
import PropTypes from 'prop-types';
import { sectionInfoProducts } from './NavHeader.module.css';

export default function NavHeader({ title, subtitle, link, colorBtn }) {
  return (
    <section className={sectionInfoProducts}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <a target="new" href={link}>
        <button style={{ backgroundColor: colorBtn }} type="button">
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
  colorBtn: PropTypes.string.isRequired,
};
