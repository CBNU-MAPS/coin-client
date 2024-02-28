import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './BingoBoard.module.scss';
import Button from '../../../components/Button/Button';
import useBingoInfoStore from '../../../stores/bingoInfoStore';
import useQuestionStore from '../../../stores/questionStore';
import QuestionModalOverlay from './QuestionModal/QuestionModalOverlay';
import useAnswerStore from '../../../stores/answerStore';

function BingoBoard({ client, boardRef }) {
  const [isReady, setIsReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const bingoSize = useBingoInfoStore((state) => state.bingoSize);
  const isStarted = useBingoInfoStore((state) => state.isStarted);
  const questions = useQuestionStore((state) => state.questions);
  const answers = useAnswerStore((state) => state.answers);

  const bingoCellSize = {
    width: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
    height: `${21 * (bingoSize + 2 * (4 - bingoSize)) - 15}px`,
  };

  const handleCellClick = (id, answer) => {
    if (!isStarted) {
      setSelectedQuestionId(id);
      setIsModalOpen(true);
    } else {
      // TODO: 게임이 시작되었을 때 클릭 이벤트
      client.current.publish({
        destination: '/bingo/select',
        body: JSON.stringify({ questionId: id, answer }),
      });
    }
  };

  const ready = () => {
    setIsReady(!isReady);
    client.current.publish({
      destination: '/bingo/ready',
      body: JSON.stringify({ answers }),
    });
  };

  return (
    <div>
      <div className={`${style.bingoBoard}`} ref={boardRef}>
        {questions.map((question) => {
          const answer =
            answers?.filter((item) => item.questionId === question.id)[0]
              ?.answer || '';

          return (
            <div
              id={question.id}
              key={question.id}
              className={`${style.bingoCell} bold18`}
              style={bingoCellSize}
              onClick={() => !isReady && handleCellClick(question.id, answer)}
              onKeyDown={() => !isReady && handleCellClick(question.id, answer)}
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
      {answers.length === questions.length && !isStarted && (
        <div className={style.readyButton}>
          <Button
            text={!isReady ? '준비 완료' : '준비 완료 해제'}
            handleClick={ready}
          />
        </div>
      )}
    </div>
  );
}

BingoBoard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  client: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  boardRef: PropTypes.object.isRequired,
};

export default BingoBoard;
