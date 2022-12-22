import { useNavigate } from 'react-router-dom';

import { Quiz as QuizType } from '../../common/quiz';
import Question from './Question';
import { Button } from 'antd';

type Props = {
  quiz: QuizType;
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
};

const Quiz = ({ quiz, setQuiz }: Props) => {
  const navigate = useNavigate();

  const isQuizInProgress = () =>
    quiz.questions?.length && quiz.current < quiz.questions?.length;

  return (
    <>
      <h1>Are you introvert or extravert? Let's figure out!</h1>
      {isQuizInProgress() ? (
        <>
          <p>Please pick the most appropriate answer</p>
          <Question quiz={quiz} setQuiz={setQuiz} />
        </>
      ) : (
        <>
          <p>You have answered all the questions</p>
          <Button type='link' onClick={() => navigate('/verdict')}>
            Go to Verdict
          </Button>
        </>
      )}
    </>
  );
};

export default Quiz;
