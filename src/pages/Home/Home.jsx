import React, { useState } from 'react';

import Button from '../../components/common/Button/Button';
import BingoSettingModal from '../../components/BingoSettingModal/BingoSettingModal';
import CoinIcon from '../../Icons/CoinIcon';
import style from './Home.module.scss';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`${style.container}`}>
      <CoinIcon />
      <div className={`${style.comment} bold42`}>{'\0\0사람들과\0\0\0 공통 관심사를 찾아보세요'}</div>
      <Button text="빙고 생성하기" handleClick={openModal} />
      {isModalOpen && <BingoSettingModal />}
    </div>
  );
}

export default Home;
