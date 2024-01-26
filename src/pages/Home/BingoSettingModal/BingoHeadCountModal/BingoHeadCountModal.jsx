import React from 'react';
import PropTypes from 'prop-types';

import style from './BingoHeadCountModal.module.scss';
import NextIcon from '../../../../Icons/NextIcon';
import PrevIcon from '../../../../Icons/PrevIcon';
import PlusIcon from '../../../../Icons/PlusIcon';
import MinusIcon from '../../../../Icons/MinusIcon';
import useBingoInfoStore from '../../../../stores/bingoInfoStore';

function BingoHeadCountModal({ setModalType }) {
  const { bingoHeadCount, setBingoHeadCount } = useBingoInfoStore();

  const handleMinusButton = () => {
    if (bingoHeadCount === 2) {
      alert('최소 2명 이상이어야 합니다.');
    } else {
      setBingoHeadCount(bingoHeadCount - 1);
    }
  };

  const handlePlusButton = () => {
    if (bingoHeadCount === 10) {
      alert('최대 10명까지 가능합니다.');
    } else {
      setBingoHeadCount(bingoHeadCount + 1);
    }
  };

  const handlePrevButton = () => {
    setModalType('bingoName');
  };

  const handleNextButton = () => {
    setModalType('bingoSize');
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>인원 수(2~10)</div>
      <div className={`${style.modalInput}`}>
        <button
          type="button"
          aria-label="Minus Button"
          onClick={handleMinusButton}>
          <MinusIcon />
        </button>
        <div className="bold32">{bingoHeadCount}</div>
        <button
          type="button"
          aria-label="Plus Button"
          onClick={handlePlusButton}>
          <PlusIcon />{' '}
        </button>
      </div>
      <div className={`${style.buttons}`}>
        <button
          type="button"
          aria-label="Prev Button"
          onClick={handlePrevButton}>
          <PrevIcon />
        </button>
        <button
          type="button"
          aria-label="Next Button"
          onClick={handleNextButton}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

BingoHeadCountModal.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default BingoHeadCountModal;
