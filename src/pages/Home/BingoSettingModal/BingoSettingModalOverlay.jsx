import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModalOverlay.module.scss';
import BingoHeadCountModal from './BingoHeadCountModal/BingoHeadCountModal';
import BingoSizeModal from './BingoSizeModal/BingoSizeModal';

function BingoSettingModalOverlay({
  closeModal,
  bingoName,
  setBingoName,
  bingoHeadCount,
  setBingoHeadCount,
  bingoSize,
  setBingoSize,
  createBingo,
}) {
  const [modalType, setModalType] = useState('bingoName');
  const modalOverlay = useRef(null);

  const outsideClick = (event) => {
    if (event.target === modalOverlay.current) {
      closeModal();
    }
  };

  return (
    <div
      className={`${style.modalOverlay}`}
      ref={modalOverlay}
      onClick={outsideClick}
      onKeyDown={outsideClick}
      role="presentation">
      {modalType === 'bingoName' && (
        <BingoNameModal
          bingoName={bingoName}
          setBingoName={setBingoName}
          setModalType={setModalType}
        />
      )}
      {modalType === 'bingoHeadCount' && (
        <BingoHeadCountModal
          bingoHeadCount={bingoHeadCount}
          setBingoHeadCount={setBingoHeadCount}
          setModalType={setModalType}
        />
      )}
      {modalType === 'bingoSize' && (
        <BingoSizeModal
          bingoSize={bingoSize}
          setBingoSize={setBingoSize}
          setModalType={setModalType}
          handleNextButton={createBingo}
        />
      )}
    </div>
  );
}

BingoSettingModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  bingoName: PropTypes.string.isRequired,
  setBingoName: PropTypes.func.isRequired,
  bingoHeadCount: PropTypes.number.isRequired,
  setBingoHeadCount: PropTypes.func.isRequired,
  bingoSize: PropTypes.number.isRequired,
  setBingoSize: PropTypes.func.isRequired,
  createBingo: PropTypes.func.isRequired,
};

export default BingoSettingModalOverlay;
