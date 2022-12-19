import { useQuestionsWithAnswersQuery } from '../../graphql/quiz.generated';

const Quiz = () => {
  const { data: quiz, loading, error } = useQuestionsWithAnswersQuery();

  return (
    <>
      <h1>This is the Quiz!</h1>
      <pre>quiz: {JSON.stringify(quiz, null, 2)}</pre>
      <pre>loading: {String(loading)}</pre>
      <pre>error: {JSON.stringify(error, null, 2)}</pre>
    </>
  );
};

export default Quiz;
