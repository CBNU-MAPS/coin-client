import React from 'react';

import style from './BingoNameModal.module.scss';

function BingoNameModal() {
  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modalTitle} bold32`}>이번 모임 이름은?</div>
      <input className={`${style.modalInput} medium24`} />
      <div className={`${style.nextButton}`}>
        <button type="button">click</button>
      </div>
    </div>
  );
}

export default BingoNameModal;
