import { useVerdictLazyQuery } from '../../graphql/verdict.generated';
import { Quiz } from '../App';

type Props = {
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Verdict = ({ quiz }: Props) => {
  return (
    <>
      <h1>Verdict</h1>
    </>
  );
};

export default Verdict;
