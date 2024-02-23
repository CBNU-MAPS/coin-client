import React from 'react';
import { useNavigate } from 'react-router-dom';

import InaccessIcon from '../../Icons/InaccessIcon';
import Button from '../../components/Button/Button';
import style from './Inaccess.module.scss';

function Inaccess() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={`${style.container}`}>
      <InaccessIcon />
      <div className={`${style.message} bold32`}>접근할 수 없는 방입니다.</div>
      <div className={`${style.comment} medium18`}>
        없거나, 꽉찼거나, 이미 시작한 방입니다.
      </div>
      <Button text="흠으로 돌아가기" handleClick={navigateHome} />
    </div>
  );
}

export default Inaccess;
