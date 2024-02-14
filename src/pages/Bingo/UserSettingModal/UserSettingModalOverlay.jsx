import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './UserSettingModalOverlay.module.scss';
import UserNameModal from './UserNameModal/UserNameModal';
import UserAvatarModal from './UserAvatarModal/UserAvatarModal';

function UserSettingModalOverlay({ client, setIsModalOpen }) {
  const [modalType, setModalType] = useState('userName');

  return (
    <div className={`${style.modalOverlay}`}>
      {modalType === 'userName' ? (
        <UserNameModal setModalType={setModalType} client={client} />
      ) : (
        <UserAvatarModal
          setModalType={setModalType}
          setIsModalOpen={setIsModalOpen}
          client={client}
        />
      )}
    </div>
  );
}

UserSettingModalOverlay.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  client: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default UserSettingModalOverlay;
