import { TheQuiz } from '../App';

type Props = {
  quiz: TheQuiz;
  setQuiz: React.Dispatch<React.SetStateAction<TheQuiz>>;
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
