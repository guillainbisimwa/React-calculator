import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };

  const colorBtn = () => `${color}`;

  return <div className={colorBtn()} onClick={() => handleClick(name)}><span className="text">{name}</span></div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'button btn-primary',
};

export default Button;
