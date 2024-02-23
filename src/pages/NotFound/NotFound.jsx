import React from 'react';
import { useNavigate } from 'react-router-dom';

import NotFoundIcon from '../../Icons/NotFoundIcon';
import Button from '../../components/Button/Button';
import style from './NotFound.module.scss';

function Inaccess() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={`${style.container}`}>
      <NotFoundIcon />
      <div className={`${style.message} bold32`}>404 NOT FOUND</div>
      <div className={`${style.comment} medium18`}>잘못된 접근입니다.</div>
      <Button text="흠으로 돌아가기" handleClick={navigateHome} />
    </div>
  );
}

export default Inaccess;
