import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModalOverlay.module.scss';
import BingoHeadCountModal from './BingoHeadCountModal/BingoHeadCountModal';

function BingoSettingModalOverlay({
  closeModal,
  bingoName,
  setBingoName,
  bingoHeadCount,
  setBingoHeadCount,
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
    </div>
  );
}

BingoSettingModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  bingoName: PropTypes.string.isRequired,
  setBingoName: PropTypes.func.isRequired,
  bingoHeadCount: PropTypes.number.isRequired,
  setBingoHeadCount: PropTypes.func.isRequired,
};

export default BingoSettingModalOverlay;
