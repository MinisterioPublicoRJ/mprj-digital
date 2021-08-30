import React from 'react';
import PropTypes from 'prop-types';
import {
  sectionProductsBgOuter,
  sectionProductBgImage,
  sectionProductBgImageActive,
} from './BgHeader.module.css';

export default function BgHeader({ currentTab, bgList }) {
  console.log('hi', currentTab, bgList);
  return (
    <div className={sectionProductsBgOuter}>
      {bgList.map(({ id, imgBg }) => (
        <img
          key={id}
          alt={imgBg}
          src={imgBg}
          className={`${sectionProductBgImage} ${
            currentTab === id ? sectionProductBgImageActive : ''
          }`}
        />
      ))}
    </div>
  );
}
BgHeader.propTypes = {
  currentTab: PropTypes.string.isRequired,
  bgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
