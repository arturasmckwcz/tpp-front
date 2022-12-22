import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { Quiz, quizInit } from '../common/quiz';
import { getQuizStatus, QuizStatus } from '../common/helpers';

type Props = {
  countQuestions: number;
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Start = ({ countQuestions, quiz, setQuiz }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Are you an introvert or an extrovert?</h1>
      <Form
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={formData => {
          setQuiz({ ...quizInit(countQuestions), email: formData.email });
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
