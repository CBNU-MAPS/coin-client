import React from 'react';
import PropTypes from 'prop-types';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import avatarMappingObject from '../../../utils/avatarMappingObject';

function UserBoard({ userRef }) {
  const users = useBingoInfoStore((state) => state.users);

  return (
    <div className={style.userBoard} ref={userRef}>
      {users.map((user) => (
        <div
          id={user.avatar}
          key={user.avatar}
          className={`${style.user} bold18`}
          style={{
            top: `${Math.floor(Math.random() * 200)}px`,
            left: `${Math.floor(Math.random() * 270)}px`,
          }}>
          {avatarMappingObject[user.avatar]} &nbsp; {user.name}
        </div>
      ))}
    </div>
  );
}

UserBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userRef: PropTypes.object.isRequired,
};

export default UserBoard;
