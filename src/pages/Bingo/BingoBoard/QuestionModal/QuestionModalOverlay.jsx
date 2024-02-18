import React from 'react';
import PropTypes from 'prop-types';

import style from './QuestionModalOverlay.module.scss';
import useQuestionStore from '../../../../stores/questionStore';

function QuestionModalOverlay({ selectedQuestionId }) {
  const { questions } = useQuestionStore();
  const questionType = questions.filter(
    (question) => question.id === selectedQuestionId,
  )[0].type;

  return <div className={`${style.modalOverlay}`}>overlay</div>;
}

export default QuestionModalOverlay;

QuestionModalOverlay.propTypes = {
  selectedQuestionId: PropTypes.number.isRequired,
};
