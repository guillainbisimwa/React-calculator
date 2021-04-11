import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };

  const isNumber = (n) => /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  if (name === '0') {
    return <div className="button button-equal" onClick={() => handleClick(name)}><span className="text">{name}</span></div>;
  }
  if (isNumber(name)) {
    return <div className="button" onClick={() => handleClick(name)}><span className="text">{name}</span></div>;
  }
  return <div className="button btn-primary" onClick={() => handleClick(name)}><span className="text">{name}</span></div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
