import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

function Button({ text }) {
  return (
    <button type="button" className={`${style.button} bold26`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
