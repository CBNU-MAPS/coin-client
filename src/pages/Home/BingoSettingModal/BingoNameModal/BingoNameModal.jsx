import React, { useEffect, useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import PropTypes from 'prop-types';

import style from './BingoNameModal.module.scss';
import NextIcon from '../../../../Icons/NextIcon';
import useBingoInfoStore from '../../../../stores/bingoInfoStore';

function BingoNameModal({ setModalType }) {
  const inputRef = useRef(null);
  const [bingoName, setBingoName] = useBingoInfoStore(
    useShallow((state) => [state.bingoName, state.setBingoName]),
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        maxLength="9"
        ref={inputRef}
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
  setModalType: PropTypes.func.isRequired,
};

export default BingoNameModal;
