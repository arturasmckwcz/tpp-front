import { useVerdictLazyQuery } from '../../graphql/verdict.generated';
import { TheQuiz } from '../App';

type Props = {
  quiz: TheQuiz;
  setQuiz: React.Dispatch<React.SetStateAction<TheQuiz>>;
};

const Verdict = ({ quiz }: Props) => {
  return (
    <>
      <h1>Verdict</h1>
    </>
  );
};

export default Verdict;
