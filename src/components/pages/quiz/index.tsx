import { useNavigate } from 'react-router-dom';

import { Quiz as QuizType } from '../../common/quiz';
import Question from './Question';
import { Button } from 'antd';
import { getQuizStatus, QuizStatus } from '../../common/helpers';

type Props = {
  quiz: QuizType;
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
};

const Quiz = ({ quiz, setQuiz }: Props) => {
  const navigate = useNavigate();
  const quizStatus = getQuizStatus(quiz);

  const render = () => {
    switch (quizStatus) {
      case QuizStatus.IN_PROGRESS:
        return (
          <>
            <p>Please pick the most appropriate answer</p>
            <Question quiz={quiz} setQuiz={setQuiz} />
          </>
        );
      case QuizStatus.FINISHED:
        return (
          <>
            <p>You have answered all the questions</p>
            <Button type='link' onClick={() => navigate('/verdict')}>
              Go to Verdict
            </Button>
            <p>Or start by entering email</p>
            <Button type='link' onClick={() => navigate('/')}>
              Go to Start
            </Button>
          </>
        );
      default:
        return (
          <>
            <p>Please enter your email to start the quiz</p>
            <Button type='link' onClick={() => navigate('/')}>
              Go to Start
            </Button>
          </>
        );
    }
  };

  return (
    <>
      <h1>Are you introvert or extravert? Let's figure out!</h1>
      {render()}
    </>
  );
};

export default Quiz;
