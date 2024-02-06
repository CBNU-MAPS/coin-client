import React from 'react';
import PropTypes from 'prop-types';

import NextIcon from '../../../../Icons/NextIcon';
import style from './UserNameModal.module.scss';
import useUserInfoStore from '../../../../stores/userInfoStore';

function UserNameModal({ setModalType }) {
  const { userName, setUserName } = useUserInfoStore();
  const inputChange = (event) => {
    setUserName(event.target.value);
  };

  const nextButtonClick = () => {
    if (userName === '') {
      alert('이름을 입력해주세요.');
    } else {
      setModalType('userAvatarModal');
    }
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>이름을 알려주세요.</div>
      <input
        className={`${style.modalInput} medium24`}
        value={userName}
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
  setModalType: PropTypes.func.isRequired,
};

export default UserNameModal;
