import React, { useState } from 'react';

import style from './BingoBoard.module.scss';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import useQuestionStore from '../../../stores/questionStore';
import QuestionModalOverlay from './QuestionModal/QuestionModalOverlay';
import useAnswerStore from '../../../stores/answerStore';

function BingoBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const bingoSize = useBingoInfoStore((state) => state.bingoSize);
  const questions = useQuestionStore((state) => state.questions);
  const answers = useAnswerStore((state) => state.answers);

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
  };

  const handleCellClick = (id) => {
    setSelectedQuestionId(id);
    setIsModalOpen(true);
  };

  return (
    <div className={`${style.bingoBoard}`}>
      {questions.map((question) => {
        const answer =
          answers?.filter((item) => item.id === question.id)[0]?.answer || '';

        return (
          <div
            key={question.id}
            className={`${style.bingoCell} bold18`}
            style={bingoCellSize}
            onClick={() => handleCellClick(question.id)}
            onKeyDown={() => handleCellClick(question.id)}
            role="presentation">
            {answer}
          </div>
        );
      })}
      {isModalOpen && (
        <QuestionModalOverlay
          selectedQuestionId={selectedQuestionId}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default BingoBoard;
