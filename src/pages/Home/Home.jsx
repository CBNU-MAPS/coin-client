import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import BingoSettingModalOverlay from './BingoSettingModal/BingoSettingModalOverlay';
import CoinIcon from '../../Icons/CoinIcon';
import style from './Home.module.scss';
import Spinner from '../../components/Spinner/Spinner';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <Spinner text="빙고 생성중" />;
  }

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
          setIsLoading={setIsLoading}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default Home;
