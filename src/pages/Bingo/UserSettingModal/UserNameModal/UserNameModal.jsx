import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import PropTypes from 'prop-types';

import NextIcon from '../../../../Icons/NextIcon';
import style from './UserNameModal.module.scss';
import useUserInfoStore from '../../../../stores/userInfoStore';

function UserNameModal({ client, setModalType }) {
  const [userName, setUserName, avatar] = useUserInfoStore(
    useShallow((state) => [state.userName, state.setUserName, state.avatar]),
  );

  const inputChange = (event) => {
    setUserName(event.target.value);
  };

  const nextButtonClick = () => {
    if (userName === '') {
      alert('이름을 입력해주세요.');
    } else {
      setModalType('userAvatarModal');
      client.current.publish({
        destination: '/bingo/avatar',
        body: JSON.stringify({ avatar }),
      });
    }
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>이름을 알려주세요.</div>
      <input
        className={`${style.modalInput} medium24`}
        value={userName}
        maxLength="7"
        onChange={inputChange}
      />
      <div className={`${style.nextButton}`}>
        <button
          type="button"
          aria-label="Next Button"
          onClick={nextButtonClick}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

UserNameModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  client: PropTypes.object.isRequired,
  setModalType: PropTypes.func.isRequired,
};

export default UserNameModal;
