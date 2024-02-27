import React from 'react';

import style from './StatusBoard.module.scss';

function StatusBoard() {
  return (
    <div className={style.overlay}>
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

export default StatusBoard;
