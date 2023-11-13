import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  id,
  isDisabled = false,
  label,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      disabled={isDisabled}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
