import React from 'react';
import { SyncLoader } from 'react-spinners';

import style from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={style.spinner}>
      <SyncLoader color="#84e296" />
      <p className="bold26">게임 준비중</p>
    </div>
  );
}

export default Spinner;
