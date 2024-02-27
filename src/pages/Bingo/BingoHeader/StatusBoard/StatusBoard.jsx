import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import style from './StatusBoard.module.scss';

function StatusBoard({ setIsOpenStatusBoard }) {
  const overlay = useRef(null);

  const closeBoard = (event) => {
    if (event.target === overlay.current) {
      setIsOpenStatusBoard(false);
    }
  };

  return (
    <div
      className={style.overlay}
      ref={overlay}
      onClick={closeBoard}
      onKeyDown={closeBoard}
      role="presentation">
      <div className={`${style.board}`}>
        <div className={`${style.boardTitle} bold26`}>빙고 현황</div>
        <div className={`${style.boardComment} medium14`}>
          현재까지의 빙고 현황을 확인할 수 있어요.
        </div>
        <div className={`${style.boardContents} medium15`}>
          TURN1. 좋아하는 음악 장르는?
        </div>
      </div>
    </div>
  );
}

StatusBoard.propTypes = {
  setIsOpenStatusBoard: PropTypes.func.isRequired,
};

export default StatusBoard;
