import React from 'react';
import PropTypes from 'prop-types';

import style from './QuestionModalOverlay.module.scss';
import useQuestionStore from '../../../../stores/questionStore';
import InputModal from './InputModal/InputModal';
import SelectModal from './SelectModal/SelectModal';

function QuestionModalOverlay({ selectedQuestionId, setIsModalOpen }) {
  const { questions } = useQuestionStore();
  const selectedQuestion = questions.filter(
    (question) => question.id === selectedQuestionId,
  )[0];

  return (
    <div className={`${style.modalOverlay}`}>
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
