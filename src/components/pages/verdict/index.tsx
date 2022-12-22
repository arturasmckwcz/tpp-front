import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { getQuizStatus, QuizStatus } from '../../common/helpers';
import { Quiz } from '../../common/quiz';
import QuizResult from './QuizResult';

type Props = {
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Verdict = ({ quiz }: Props) => {
  const navigate = useNavigate();
  const quizStatus = getQuizStatus(quiz);

  const render = () => {
    switch (quizStatus) {
      case QuizStatus.IN_PROGRESS:
        return (
          <>
            <p>Please finish answering questions</p>
            <Button type='link' onClick={() => navigate('/quiz')}>
              Go to Quiz
            </Button>
            <p>Or you may start ir over entering email address</p>
            <Button type='link' onClick={() => navigate('/')}>
              Go to Start
            </Button>
          </>
        );
      case QuizStatus.NOT_STARTED:
        return (
          <>
            <p>Please enter email to start the Quiz</p>
            <Button type='link' onClick={() => navigate('/')}>
              Go to Start
            </Button>
          </>
        );
      default:
        return (
          <>
            <p>
              We still are not able to figure out what kind of{' '}
              <strong>vert</strong> you are. So please enjoy a random quote
              instead:
            </p>
            <QuizResult quiz={quiz} />
            <Button type='link' onClick={() => navigate('/')}>
              Go to Start
            </Button>
          </>
        );
    }
  };

  return (
    <>
      <h1>Verdict</h1>
      {render()}
    </>
  );
};

export default Verdict;
