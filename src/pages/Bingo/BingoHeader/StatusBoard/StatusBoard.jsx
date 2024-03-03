import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import style from './StatusBoard.module.scss';
import avatarMappingObject from '../../../../utils/avatarMappingObject';

function StatusBoard({ statusBoardInfo, setIsOpenStatusBoard }) {
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
          <div className={`${style.container}`}>
            {statusBoardInfo.map((item, index) => (
              <div key={item.question} className={`${style.boardContent}`}>
                <div className={`${style.question}`}>
                  <p className="bold14">{`Turn${statusBoardInfo.length - index}. `}</p>
                  <p>{item.question}</p>
                </div>
                <div className={`${style.userList}`}>
                  <p className={`${style.answer} bold14`}>{item.answer}</p>
                  {item.selectedUsers.map((user) => (
                    <div key={user.avatar} className={`${style.user}`}>
                      {avatarMappingObject[user.avatar]}
                      {user.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

StatusBoard.propTypes = {
  // eslint-disable-next-line
  statusBoardInfo: PropTypes.array.isRequired,
  setIsOpenStatusBoard: PropTypes.func.isRequired,
};

export default StatusBoard;
