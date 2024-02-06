import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './UserSettingModalOverlay.module.scss';
import UserNameModal from './UserNameModal/UserNameModal';
import UserAvatarModal from './UserAvatarModal/UserAvatarModal';

function UserSettingModalOverlay({ setIsModalOpen }) {
  const [modalType, setModalType] = useState('userName');

  return (
    <div className={`${style.modalOverlay}`}>
      {modalType === 'userName' ? (
        <UserNameModal setModalType={setModalType} />
      ) : (
        <UserAvatarModal
          setModalType={setModalType}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

UserSettingModalOverlay.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default UserSettingModalOverlay;
