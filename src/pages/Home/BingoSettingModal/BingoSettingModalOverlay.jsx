import React, { useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import PropTypes from 'prop-types';

import BingoNameModal from './BingoNameModal/BingoNameModal';
import style from './BingoSettingModalOverlay.module.scss';
import BingoHeadCountModal from './BingoHeadCountModal/BingoHeadCountModal';
import BingoSizeModal from './BingoSizeModal/BingoSizeModal';
import useBingoInfoStore from '../../../stores/bingoInfoStore';

function BingoSettingModalOverlay({ setIsModalOpen }) {
  const [setBingoName, setBingoHeadCount, setBingoSize] = useBingoInfoStore(
    useShallow((state) => [
      state.setBingoName,
      state.setBingoHeadCount,
      state.setBingoSize,
    ]),
  );
  const [modalType, setModalType] = useState('bingoName');
  const modalOverlay = useRef(null);

  const closeModal = (event) => {
    if (event.target === modalOverlay.current) {
      setBingoName('');
      setBingoHeadCount(2);
      setBingoSize(3);
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className={`${style.modalOverlay}`}
      ref={modalOverlay}
      onClick={closeModal}
      onKeyDown={closeModal}
      role="presentation">
      {modalType === 'bingoName' && (
        <BingoNameModal setModalType={setModalType} />
      )}
      {modalType === 'bingoHeadCount' && (
        <BingoHeadCountModal setModalType={setModalType} />
      )}
      {modalType === 'bingoSize' && (
        <BingoSizeModal setModalType={setModalType} />
      )}
    </div>
  );
}

BingoSettingModalOverlay.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default BingoSettingModalOverlay;
