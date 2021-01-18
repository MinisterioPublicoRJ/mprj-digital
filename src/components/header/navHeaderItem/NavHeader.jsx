import React from 'react';
import PropTypes from 'prop-types';

export default function NavHeader({
  title1,
  title2,
  title3,
  title4,
  cor,
  icon1,
  icon2,
  icon3,
  icon4,
  titleBtn,
  colorBtn,
  changeData,
}) {
  return (
    <div className="section-products">
      <img alt={title1} src={icon1} />
      <p>{title1}</p>
      <img alt={title2} src={icon2} />
      <p>{title2}</p>
      <img alt={title3} src={icon3} />
      <p>{title3}</p>
      <img alt={title4} src={icon4} />
      <p>{title4}</p>
      <button
        backgoundColor={changeData === 'MPRJDigital' ? '#fbfaf8' : '#F86C72'}
        color={colorBtn}
        type="button"
      >
        {titleBtn}
      </button>
    </div>
  );
}
NavHeader.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  titleBtn: PropTypes.string.isRequired,
  cor: PropTypes.node.isRequired,
  colorBtn: PropTypes.node.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired,
  icon4: PropTypes.string.isRequired,
  changeData: PropTypes.func.isRequired,
};
