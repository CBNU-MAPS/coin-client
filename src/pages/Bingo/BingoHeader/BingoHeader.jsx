import React from 'react';
import useBingoInfoStore from '../../../stores/bingoInfoStore';

import style from './BingoHeader.module.scss';

function BingoHeader() {
  const { bingoName } = useBingoInfoStore();
  return (
    <div className={style.header}>
      <div className={`${style.bingoName} bold32`}>{bingoName}</div>
    </div>
  );
}

export default BingoHeader;
