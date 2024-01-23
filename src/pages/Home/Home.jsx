import React from 'react';

import Button from '../../components/common/Button/Button';
import CoinIcon from '../../Icons/CoinIcon';
import style from './Home.module.scss';

function Home() {
  return (
    <div className={`${style.container}`}>
      <CoinIcon />
      <div className={`${style.comment} bold42`}>{'\0\0사람들과\0\0\0 공통 관심사를 찾아보세요'}</div>
      <Button text="빙고 생성하기" />
    </div>
  );
}

export default Home;
