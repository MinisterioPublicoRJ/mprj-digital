/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  sectionInfoProducts,
} from './NavHeader.module.css';

export default function NavHeader({ title, subtittle, link }) {
  return (
    <section className={sectionInfoProducts}>
      <h2>{title}</h2>
      <p>{subtittle}</p>
      <button>Conheça a ferramenta
        {link}
      </button>
    </section>
  );
}
NavHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtittle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
