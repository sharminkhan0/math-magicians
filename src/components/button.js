import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = ({ label, type, onClick }) => (
  <button type="button" className={type} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};

export default Button;
