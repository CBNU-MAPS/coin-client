import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import BingoSettingModalOverlay from './BingoSettingModal/BingoSettingModalOverlay';
import CoinIcon from '../../Icons/CoinIcon';
import style from './Home.module.scss';
import useBingoSettingStore from '../../stores/bingoSettingStore';

function Home() {
  const {
    bingoName,
    setBingoName,
    bingoHeadCount,
    setBingoHeadCount,
    bingoSize,
    setBingoSize,
  } = useBingoSettingStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setBingoName('');
    setBingoHeadCount(2);
    setBingoSize(3);
    setIsModalOpen(false);
  };

  const createBingo = () => {
    const bingoInfo = {
      bingoName,
      bingoHeadCount,
      bingoSize,
    };
    // TODO: fetch BingoInfo to server
  };

  return (
    <div className={`${style.container}`}>
      <CoinIcon />
      <div className={`${style.comment} bold42`}>
        사람들과
        <br />
        공통 관심사를
        <br />
        찾아보세요.
      </div>
      <Button text="빙고 생성하기" handleClick={openModal} />
      {isModalOpen && (
        <BingoSettingModalOverlay
          closeModal={closeModal}
          createBingo={createBingo}
        />
      )}
    </div>
  );
}

export default Home;
