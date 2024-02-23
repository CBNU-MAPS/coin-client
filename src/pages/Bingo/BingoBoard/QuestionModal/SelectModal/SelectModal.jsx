import React from 'react';
import PropTypes from 'prop-types';

import style from './SelectModal.module.scss';
import useAnswerStore from '../../../../../stores/answerStore';

function SelectModal({ selectedQuestion, setIsModalOpen }) {
  const { answers, setAnswers } = useAnswerStore();
  const selectedAnswer =
    answers.find((item) => item.id === selectedQuestion.id)?.answer || '';

  const answerClick = (event) => {
    if (selectedAnswer) {
      const updatedAnswers = answers.map((item) => {
        if (item.id === selectedQuestion.id) {
          return { id: selectedQuestion.id, answer: event.target.innerText };
        }
        return item;
      });
      setAnswers(updatedAnswers);
    } else {
      setAnswers([
        ...answers,
        { id: selectedQuestion.id, answer: event.target.innerText },
      ]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={style.modal}>
        <div className={`${style.modalTitle} bold28`}>
          {selectedQuestion.question}
        </div>
        <div className={`${style.optionContainer} bold26`}>
          <div
            className={style.option}
            onClick={answerClick}
            onKeyDown={answerClick}
            role="presentation">
            {selectedQuestion.option[0]}
          </div>
          vs
          <div
            className={style.option}
            onClick={answerClick}
            onKeyDown={answerClick}
            role="presentation">
            {selectedQuestion.option[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

SelectModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedQuestion: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default SelectModal;
