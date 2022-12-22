import { Button, Form, Modal, Radio, Space } from 'antd';
import { useState } from 'react';

import { QuestionWithAnswers } from '../../../graphql/schema.generated';
import { Quiz } from '../../common/quiz';

interface Props {
  questions: QuestionWithAnswers[];
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}

const Question = ({ questions, quiz, setQuiz }: Props) => {
  const [score, setScore] = useState<number>(0);
  const [isNothingSelected, setIsNothingSelected] = useState(false);

  const submitAnswer = (): void => {
    if (score) {
      setQuiz(prev => ({
        ...prev,
        current: prev.current + 1,
        score: prev.score + score,
      }));
      setScore(0);
    } else {
      setIsNothingSelected(true);
    }
  };

  return (
    <>
      <Form
        wrapperCol={{ span: 16 }}
        onFinish={submitAnswer}
        autoComplete='off'
      >
        <h4>{questions && questions[quiz.current].question}</h4>
        <Form.Item>
          <Radio.Group onChange={e => setScore(e.target.value)}>
            <Space direction='vertical'>
              {questions &&
                questions[quiz.current].answers?.map(answer => (
                  <Radio value={answer?.points} key={answer?.points}>
                    {answer?.answer}
                  </Radio>
                ))}
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={isNothingSelected}
        title='Please select an answer!'
        onCancel={() => setIsNothingSelected(false)}
        footer={null}
      />
    </>
  );
};

export default Question;
