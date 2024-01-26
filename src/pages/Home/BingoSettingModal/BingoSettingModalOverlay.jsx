import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModalOverlay.module.scss';
import BingoHeadCountModal from './BingoHeadCountModal/BingoHeadCountModal';
import BingoSizeModal from './BingoSizeModal/BingoSizeModal';

function BingoSettingModalOverlay({ closeModal, createBingo }) {
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
        <BingoNameModal setModalType={setModalType} />
      )}
      {modalType === 'bingoHeadCount' && (
        <BingoHeadCountModal setModalType={setModalType} />
      )}
      {modalType === 'bingoSize' && (
        <BingoSizeModal
          setModalType={setModalType}
          handleNextButton={createBingo}
        />
      )}
    </div>
  );
}

BingoSettingModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createBingo: PropTypes.func.isRequired,
};

export default BingoSettingModalOverlay;
