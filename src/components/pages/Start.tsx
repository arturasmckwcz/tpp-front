import { TheQuiz } from '../App';

type Props = {
  quiz: TheQuiz;
  setQuiz: React.Dispatch<React.SetStateAction<TheQuiz>>;
};

const Start = ({ quiz, setQuiz }: Props) => {
  return (
    <>
      <h1>Are you an introvert or an extrovert?</h1>
      <p>Please enter your email</p>
    </>
  );
};

export default Start;
