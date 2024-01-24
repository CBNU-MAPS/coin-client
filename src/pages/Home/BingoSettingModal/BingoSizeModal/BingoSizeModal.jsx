import React from 'react';
import PropTypes from 'prop-types';

import style from './BingoSizeModal.module.scss';
import NextIcon from '../../../../Icons/NextIcon';
import PrevIcon from '../../../../Icons/PrevIcon';

function BingoSizeModal({
  bingoSize,
  setBingoSize,
  setModalType,
  handleNextButton,
}) {
  const handleMinusButton = () => {
    if (bingoSize === 3) {
      alert('최소 3 x 3 이상이어야 합니다.');
    } else {
      setBingoSize(bingoSize - 1);
    }
  };

  const handlePlusButton = () => {
    if (bingoSize === 5) {
      alert('최대 5 x 5 까지 가능합니다.');
    } else {
      setBingoSize(bingoSize + 1);
    }
  };

  const handlePrevButton = () => {
    setModalType('bingoHeadCount');
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>빙고 SIZE</div>
      <div className={`${style.modalInput}`}>
        <button type="button" className="bold42" onClick={handleMinusButton}>
          -
        </button>
        <div className="bold32">{bingoSize}</div>
        <button type="button" className="bold42" onClick={handlePlusButton}>
          +
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

BingoSizeModal.propTypes = {
  bingoSize: PropTypes.number.isRequired,
  setBingoSize: PropTypes.func.isRequired,
  setModalType: PropTypes.func.isRequired,
  handleNextButton: PropTypes.func.isRequired,
};

export default BingoSizeModal;