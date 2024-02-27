import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './BingoBoard.module.scss';
import Button from '../../../components/Button/Button';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import useQuestionStore from '../../../stores/questionStore';
import QuestionModalOverlay from './QuestionModal/QuestionModalOverlay';
import useAnswerStore from '../../../stores/answerStore';

function BingoBoard({ client }) {
  const [isReady, setIsReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const bingoSize = useBingoInfoStore((state) => state.bingoSize);
  const questions = useQuestionStore((state) => state.questions);
  const answers = useAnswerStore((state) => state.answers);

  useEffect(() => {
    setIsReady(answers.length === questions.length);
  }, [answers, questions]);

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
  };

  const handleCellClick = (id) => {
    setSelectedQuestionId(id);
    setIsModalOpen(true);
  };

  const ready = () => {
    client.current.publish({
      destination: '/bingo/ready',
      body: JSON.stringify({ answers }),
    });
  };

  return (
    <div>
      <div className={`${style.bingoBoard}`}>
        {questions.map((question) => {
          const answer =
            answers?.filter((item) => item.questionId === question.id)[0]
              ?.answer || '';

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
      {isReady && (
        <div className={style.readyButton}>
          <Button text="준비 완료" handleClick={ready} />
        </div>
      )}
    </div>
  );
}

BingoBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  client: PropTypes.object.isRequired,
};

export default BingoBoard;
