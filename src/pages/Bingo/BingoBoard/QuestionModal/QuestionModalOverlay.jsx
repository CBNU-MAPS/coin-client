import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import style from './QuestionModalOverlay.module.scss';
import useQuestionStore from '../../../../stores/questionStore';
import InputModal from './InputModal/InputModal';
import SelectModal from './SelectModal/SelectModal';

function QuestionModalOverlay({ selectedQuestionId, setIsModalOpen }) {
  const modalOverlay = useRef(null);
  const { questions } = useQuestionStore();
  const selectedQuestion = questions.filter(
    (question) => question.id === selectedQuestionId,
  )[0];

  const handleOutSideClick = (event) => {
    if (event.target === modalOverlay.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className={`${style.modalOverlay}`}
      ref={modalOverlay}
      onClick={handleOutSideClick}
      onKeyDown={handleOutSideClick}
      role="presentation">
      {selectedQuestion.type === 'text' ? (
        <InputModal
          selectedQuestion={selectedQuestion}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <SelectModal
          selectedQuestion={selectedQuestion}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

QuestionModalOverlay.propTypes = {
  selectedQuestionId: PropTypes.number.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default QuestionModalOverlay;
