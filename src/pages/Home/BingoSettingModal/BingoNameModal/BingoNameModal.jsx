import React from 'react';
import PropTypes from 'prop-types';

import style from './BingoNameModal.module.scss';
import NextIcon from '../../../../Icons/NextIcon';

function BingoNameModal({ bingoName, setBingoName, setModalType }) {
  const inputChange = (event) => {
    setBingoName(event.target.value);
  };

  const nextButtonClick = () => {
    if (bingoName === '') {
      alert('모임 이름을 입력해주세요.');
    } else {
      setModalType('bingoHeadCount');
    }
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>이번 모임 이름은?</div>
      <input
        className={`${style.modalInput} medium24`}
        value={bingoName}
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

BingoNameModal.propTypes = {
  bingoName: PropTypes.string.isRequired,
  setBingoName: PropTypes.func.isRequired,
  setModalType: PropTypes.func.isRequired,
};

export default BingoNameModal;
