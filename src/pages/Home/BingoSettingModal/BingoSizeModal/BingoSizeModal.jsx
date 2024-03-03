import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import PropTypes from 'prop-types';

import style from './BingoSizeModal.module.scss';
import NextIcon from '../../../../Icons/NextIcon';
import PrevIcon from '../../../../Icons/PrevIcon';
import PlusIcon from '../../../../Icons/PlusIcon';
import MinusIcon from '../../../../Icons/MinusIcon';
import useBingoInfoStore from '../../../../stores/bingoInfoStore';
import createRoom from '../../../../apis/createRoom';

function BingoSizeModal({ setModalType }) {
  const navigate = useNavigate();

  const [bingoName, bingoHeadCount, bingoSize, setBingoSize] =
    useBingoInfoStore(
      useShallow((state) => [
        state.bingoName,
        state.bingoHeadCount,
        state.bingoSize,
        state.setBingoSize,
      ]),
    );

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

  const createBingo = async () => {
    const bingoInfo = {
      name: bingoName,
      personnel: bingoHeadCount,
      size: bingoSize,
    };

    const roomCode = await createRoom(bingoInfo);
    navigate(`/bingo/${roomCode}`, { replace: true });
  };

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>빙고 SIZE</div>
      <div className={`${style.modalInput}`}>
        <button
          type="button"
          aria-label="Minus Button"
          onClick={handleMinusButton}>
          <MinusIcon />
        </button>
        <div className="bold32">{bingoSize}</div>
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
        <button type="button" aria-label="Next Button" onClick={createBingo}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

BingoSizeModal.propTypes = {
  setModalType: PropTypes.func.isRequired,
};

export default BingoSizeModal;
