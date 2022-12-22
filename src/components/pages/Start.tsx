import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { Quiz, quizInit } from '../common/quiz';
import { getQuizStatus, QuizStatus } from '../common/helpers';
import { QuestionWithAnswers } from '../../graphql/schema.generated';
import { useQuestionsWithAnswersLazyQuery } from '../../graphql/quiz.generated';
import { useEffect } from 'react';

type Props = {
  questions: QuestionWithAnswers[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionWithAnswers[]>>;
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Start = ({ questions, setQuestions, quiz, setQuiz }: Props) => {
  const navigate = useNavigate();
  const [fetchQuiz] = useQuestionsWithAnswersLazyQuery();

  useEffect(() => {
    (async () => {
      if (!questions.length) {
        try {
          const data = (await fetchQuiz()).data
            ?.questionsWithAnswers as QuestionWithAnswers[];
          setQuestions(data);
        } catch (error) {}
      }
    })();
  }, [fetchQuiz, questions.length, setQuestions]);

  return (
    <>
      <h1>Are you an introvert or an extrovert?</h1>
      <Form
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={formData => {
          setQuiz({
            ...quizInit(questions.length),
            email: formData.email,
          });
          navigate('/quiz');
        }}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              type: 'email',
              message: "Please make sure you're submitting an email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {getQuizStatus(quiz) === QuizStatus.IN_PROGRESS && (
        <>
          <p>Or you may return to the questions</p>
          <Button type='link' onClick={() => navigate('/quiz')}>
            Go to Quiz
          </Button>
        </>
      )}
    </>
  );
};

export default Start;
