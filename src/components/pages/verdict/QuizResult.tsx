import { useVerdictQuery } from '../../../graphql/verdict.generated';
import { Quiz } from '../../common/quiz';

type Props = {
  quiz: Quiz;
};

const QuizResult = ({ quiz }: Props) => {
  const { data, loading } = useVerdictQuery({
    variables: { score: quiz.score },
  });
  return (
    <>
      {loading && <p>Loading...</p>}
      <h4>{data?.verdict?.verdict}</h4>
      <p>BTW you have scored: {data?.verdict?.score}</p>
    </>
  );
};

export default QuizResult;
