import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomButton = ({
  isDisabled = false,
  type = 'primary',
  name,
  onClick,
}) => (
  <button disabled={isDisabled} onClick={type && onClick}>
    {name}
  </button>
);

CustomButton.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default CustomButton;
