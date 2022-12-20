import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { Quiz } from '../App';

type Props = {
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const Start = ({ setQuiz }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Are you an introvert or an extrovert?</h1>
      <Form
        name='basic'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        onFinish={formData => {
          setQuiz(prev => ({ ...prev, email: formData.email }));
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
    </>
  );
};

export default Start;
