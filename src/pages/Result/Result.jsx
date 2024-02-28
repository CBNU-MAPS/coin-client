import React, { useEffect, useState } from 'react';

import style from './Result.module.scss';
import Spinner from '../../components/Spinner/Spinner';

function Result() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner text="결과 생성중" />
      ) : (
        <div className={style.container}>
          <h1 className="bold26">결과페이지</h1>
          <p className="medium24">🚧 공사중... 👷</p>
        </div>
      )}
    </div>
  );
}

export default Result;
