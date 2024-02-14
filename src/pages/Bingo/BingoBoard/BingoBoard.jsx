import React from 'react';

import style from './BingoBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import useQuestionStore from '../../../stores/questionStore';

function BingoBoard() {
  const { bingoSize } = useBingoInfoStore();
  const { questions } = useQuestionStore();

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
  };

  return (
    <div className={`${style.bingoBoard}`}>
      {questions.map((question) => {
        return (
          <div
            key={question.id}
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
