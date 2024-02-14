import React from 'react';

import style from './BingoHeader.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import LinkCopyIcon from '../../../Icons/LinkCopyIcon';

function BingoHeader() {
  const { bingoName } = useBingoInfoStore();

  return (
    <div className={style.header}>
      <div className={`${style.bingoName} bold32`}>{bingoName}</div>
      <button
        type="button"
        aria-label="Link Copy Button"
        className={`${style.copybutton} bold18`}>
        <LinkCopyIcon />
        URL
      </button>
    </div>
  );
}

export default BingoHeader;
