import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space } from 'antd';

import { Quiz, quizInit } from '../common/quiz';
import { getQuizStatus, QuizStatus } from '../common/helpers';
import { QuestionWithAnswers } from '../../graphql/schema.generated';
import { useQuestionsWithAnswersQuery } from '../../graphql/quiz.generated';

type Props = {
  questions: QuestionWithAnswers[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionWithAnswers[]>>;
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Start = ({ questions, setQuestions, quiz, setQuiz }: Props) => {
  const navigate = useNavigate();
  const { loading, error } = useQuestionsWithAnswersQuery({
    onCompleted: data => {
      setQuestions(data.questionsWithAnswers as QuestionWithAnswers[]);
    },
  });

  return (
    <>
      <h1>Are you an introvert or an extrovert?</h1>
      {loading && <Space>Loading...</Space>}
      {error ? (
        <Space>Fetching failed.</Space>
      ) : (
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
      )}
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
