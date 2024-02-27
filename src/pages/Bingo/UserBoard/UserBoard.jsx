import React from 'react';
import PropTypes from 'prop-types';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import avatarMappingObject from '../../../utils/avatarMappingObject';

function UserBoard({ userRef }) {
  const users = useBingoInfoStore((state) => state.users);

  const moveUsers = () => {
    userRef.current.childNodes.forEach((child) => {
      const childNode = child;
      const x =
        Math.floor(Math.random() * 250) - child.style.left.replace('px', '');
      const y =
        Math.floor(Math.random() * 200) - child.style.top.replace('px', '');

      childNode.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  setInterval(() => {
    moveUsers();
  }, 5000);

  return (
    <div className={style.userBoard} ref={userRef}>
      {users.map((user) => (
        <div
          id={user.avatar}
          key={user.avatar}
          className={`${style.user} medium18`}
          style={{
            top: `${Math.floor(Math.random() * 200)}px`,
            left: `${Math.floor(Math.random() * 250)}px`,
            backgroundColor: user.ready && '#000000',
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

const MemoizedUserBoard = React.memo(UserBoard);

export default MemoizedUserBoard;
