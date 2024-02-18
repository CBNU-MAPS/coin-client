import React, { useState } from 'react';

import style from './BingoBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import useQuestionStore from '../../../stores/questionStore';
import QuestionModalOverlay from './QuestionModal/QuestionModalOverlay';

function BingoBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const { bingoSize } = useBingoInfoStore();
  const { questions } = useQuestionStore();

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize))}px`,
  };

  const handleCellClick = (id) => {
    setSelectedQuestionId(id);
    setIsModalOpen(true);
  };

  return (
    <div className={`${style.bingoBoard}`}>
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className={`${style.bingoCell} bold18`}
            style={bingoCellSize}
            onClick={() => handleCellClick(question.id)}
            onKeyDown={() => handleCellClick(question.id)}
            role="presentation">
            {null}
          </div>
        );
      })}
      {isModalOpen && (
        <QuestionModalOverlay selectedQuestionId={selectedQuestionId} />
      )}
    </div>
  );
}

export default BingoBoard;
