import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './InputModal.module.scss';
import NextIcon from '../../../../../Icons/NextIcon';
import useAnswerStore from '../../../../../stores/answerStore';

function InputModal({ selectedQuestion, setIsModalOpen }) {
  const { answers, setAnswers } = useAnswerStore();
  const selectedAnswer =
    answers.find((item) => item.id === selectedQuestion.id)?.answer || '';
  const [answer, setAnswer] = useState(selectedAnswer);

  const inputChange = (event) => {
    setAnswer(event.target.value);
  };

  const nextButtonClick = () => {
    if (selectedAnswer) {
      const updatedAnswers = answers.map((item) => {
        if (item.id === selectedQuestion.id) {
          return { id: selectedQuestion.id, answer };
        }
        return item;
      });
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, { id: selectedQuestion.id, answer }]);
    }
    console.log(answers);
    setIsModalOpen(false);
  };

  return (
    <div className={style.modal}>
      <div className={`${style.modalTitle} bold32`}>
        {selectedQuestion.question}
      </div>
      <input
        className={`${style.modalInput} medium24`}
        value={answer}
        maxLength="6"
        onChange={inputChange}
      />
      <div className={`${style.nextButton}`}>
        <button
          type="button"
          aria-label="Next Button"
          onClick={nextButtonClick}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
}

InputModal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectedQuestion: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default InputModal;
