import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import style from './Spinner.module.scss';

function Spinner({ text }) {
  return (
    <div className={style.spinner}>
      <SyncLoader color="#84e296" />
      <p className="bold26">{text}</p>
    </div>
  );
}

Spinner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Spinner;
