import { Quiz as QuizType } from '../App';

type Props = {
  quiz: QuizType;
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
};

const Quiz = ({ quiz, setQuiz }: Props) => {
  return (
    <>
      <h1>Are you introvert or extravert? Let's figure out!</h1>
      <p>Please pick the most appropriate answers</p>
    </>
  );
};

export default Quiz;
