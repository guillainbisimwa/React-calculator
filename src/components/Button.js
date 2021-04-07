import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      this.props.name === '=' ? <div className="button button-equal"><span className="text">{this.props.name}</span></div> : <div className="button"><span className="text">{this.props.name}</span></div>

    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
