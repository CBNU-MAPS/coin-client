function sortAnswersByQuestionId(questions, answers) {
  const answersMap = {};
  answers.forEach((answer) => {
    answersMap[answer.questionId] = answer;
  });

  const sortedAnswers = questions.map((question) => answersMap[question.id]);

  return sortedAnswers;
}

export default sortAnswersByQuestionId;
