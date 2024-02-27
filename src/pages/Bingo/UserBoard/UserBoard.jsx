import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './UserBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import avatarMappingObject from '../../../utils/avatarMappingObject';

function UserBoard({ userRef }) {
  const users = useBingoInfoStore((state) => state.users);
  const isStarted = useBingoInfoStore((state) => state.isStarted);

  useEffect(() => {
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

    let timer;
    if (!isStarted) {
      timer = setInterval(() => {
        moveUsers();
      }, 5000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStarted, userRef]);

  return (
    <div>
      {isStarted ? (
        <div className={style.startedUserBoard}>
          {users.map((user) => (
            <div
              key={`selected-${user.avatar}`}
              className={`${style.startedUser} medium24`}
              style={{
                backgroundColor: user.turn && '#000000',
              }}>
              {avatarMappingObject[user.avatar]}
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}

UserBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userRef: PropTypes.object.isRequired,
};

const MemoizedUserBoard = React.memo(UserBoard);

export default MemoizedUserBoard;
