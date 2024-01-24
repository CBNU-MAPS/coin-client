import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModalOverlay.module.scss';

function BingoSettingModalOverlay({ closeModal }) {
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
      <BingoNameModal />
    </div>
  );
}

BingoSettingModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default BingoSettingModalOverlay;
