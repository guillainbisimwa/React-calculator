import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div />
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'NONE',
};

export default Button;
