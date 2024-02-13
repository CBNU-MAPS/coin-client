import React from 'react';
import PropTypes from 'prop-types';

import style from './UserAvatarModal.module.scss';
import PrevIcon from '../../../../Icons/PrevIcon';
import NextIcon from '../../../../Icons/NextIcon';
import avatarMappingObject from '../../../../utils/avatarMappingObject';
import useUserInfoStore from '../../../../stores/userInfoStore';
import useUserAvatarStore from '../../../../stores/userAvatarStore';

function UserAvatarModal({ client, setModalType, setIsModalOpen }) {
  const { userName, avatar, setAvatar } = useUserInfoStore();
  const { userAvatar } = useUserAvatarStore();

  const handlePrevButton = () => {
    setModalType('userName');
  };

  const createUser = () => {
    const userInfo = {
      userName,
      avatar,
    };
    if (avatar > 9) {
      alert('캐릭터를 선택해 주세요.');
    } else {
      // eslint-disable-next-line
      console.log(userInfo);
      setIsModalOpen(false);
      client.current.publish({
        destination: '/bingo/user',
        body: JSON.stringify(userInfo),
      });
    }
  };

  const handleClick = (index) => {
    setAvatar(index);
    client.current.publish({
      destination: '/bingo/avatar',
      body: JSON.stringify({ avatar: index }),
    });
  };

  return (
    <div className={style.modal}>
      <div className={`${style.modalTitle} bold26`}>캐릭터를 골라주세요.</div>
      <div className={`${style.avatarList}`}>
        {userAvatar.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`${item ? style.selected : style.notselected} medium18`}
            onClick={() => !item && handleClick(index)}
            onKeyDown={() => !item && handleClick(index)}
            role="presentation">
            {avatarMappingObject[index]}
          </div>
        ))}
      </div>
      <div className={`${style.buttons}`}>
        <button
          type="button"
          aria-label="Prev Button"
          onClick={handlePrevButton}>
          <PrevIcon />
        </button>
        <button type="button" aria-label="Next Button" onClick={createUser}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

UserAvatarModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  client: PropTypes.object.isRequired,
  setModalType: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default UserAvatarModal;
