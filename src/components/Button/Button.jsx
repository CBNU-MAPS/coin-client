import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

function Button({ text, handleClick }) {
  return (
    <button
      type="button"
      className={`${style.button} bold26`}
      onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
