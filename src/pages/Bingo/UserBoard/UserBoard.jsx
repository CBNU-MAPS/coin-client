import React from 'react';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';

function UserBoard() {
  const { users } = useBingoInfoStore();

  return (
    <div className={style.userBoard}>
      <h1>User Board</h1>
    </div>
  );
}

export default UserBoard;
