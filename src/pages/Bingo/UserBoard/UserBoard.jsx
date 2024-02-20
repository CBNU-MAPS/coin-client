import React from 'react';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import avatarMappingObject from '../../../utils/avatarMappingObject';

function UserBoard() {
  const { users } = useBingoInfoStore();

  return (
    <div className={style.userBoard}>
      {users.map((user) => (
        <div className={`${style.user} bold18`}>
          {avatarMappingObject[user.avatar]} &nbsp; {user.name}
        </div>
      ))}
    </div>
  );
}

export default UserBoard;
