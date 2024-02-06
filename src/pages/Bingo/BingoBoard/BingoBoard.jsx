import React from 'react';

import style from './BingoBoard.module.scss';

function BingoBoard() {
  const bingoSize = 5;
  const questions = Array(bingoSize * bingoSize).fill(null);

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
  };

  return (
    <div className={`${style.bingoBoard}`}>
      {questions.map((question, index) => {
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`${style.bingoCell}`}
            style={bingoCellSize}>
            {null}
          </div>
        );
      })}
    </div>
  );
}

export default BingoBoard;
