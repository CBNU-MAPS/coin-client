import React from 'react';
import { useLocation } from 'react-router-dom';

import style from './BingoHeader.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import LinkCopyIcon from '../../../Icons/LinkCopyIcon';

function BingoHeader() {
  const { bingoName } = useBingoInfoStore();
  const location = useLocation();

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {}
  };

  return (
    <div className={style.header}>
      <div className={`${style.bingoName} bold32`}>{bingoName}</div>
      <button
        type="button"
        aria-label="Link Copy Button"
        className={`${style.copybutton} bold18`}
        onClick={() =>
          handleCopyClipBoard(
            `${import.meta.env.VITE_BASE_URL}${location.pathname}`,
          )
        }>
        <LinkCopyIcon />
        URL
      </button>
    </div>
  );
}

export default BingoHeader;
