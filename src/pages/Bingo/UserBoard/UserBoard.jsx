import React from 'react';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import avatarMappingObject from '../../../utils/avatarMappingObject';

function UserBoard() {
  const users = useBingoInfoStore((state) => state.users);

  return (
    <div className={style.userBoard}>
      {users.map((user, index) => {
        const randomTop = Math.floor(Math.random() * 200);
        const randomLeft = Math.floor(Math.random() * 270);
        const location = {
          top: `${randomTop}px`,
          left: `${randomLeft}px`,
          zIndex: `${index}`,
        };

        return (
          <div
            key={user.avatar}
            className={`${style.user} bold18`}
            style={location}>
            {avatarMappingObject[user.avatar]} &nbsp; {user.name}
          </div>
        );
      })}
    </div>
  );
}

export default UserBoard;
