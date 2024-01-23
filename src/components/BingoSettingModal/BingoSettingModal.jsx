import React from 'react';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModal.module.scss';

function BingoSettingModal() {
  return (
    <div className={`${style.modalOverlay}`}>
      <BingoNameModal />
    </div>
  );
}

export default BingoSettingModal;
