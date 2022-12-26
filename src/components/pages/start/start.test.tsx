import { mount, ReactWrapper } from 'enzyme';

import { element, fixJest } from '../../common/testHelpers';
import Start from '.';
import { quizInit } from '../../common/quiz';

const quiz = quizInit(0);

describe('<Start />', () => {
  let wrapper: ReactWrapper;

  describe('Email input form', () => {
    const elementStart = element(
      <Start
        questions={[]}
        setQuestions={() => {}}
        quiz={quiz}
        setQuiz={() => {}}
      />
    );

    beforeAll(() => {
      fixJest();
      wrapper = mount(elementStart);
    });

    it('should render "Are you an introvert or an extrovert"', async () => {
      const textH1 = /Are you an introvert or an extrovert/;

      expect(JSON.stringify(wrapper.text().match(textH1))).toBe(
        JSON.stringify([textH1.source])
      );
    });

    it('should render input for email', async () => {
      const textEmail = /Email/;
      const textSubmit = /Submit/;

      expect(JSON.stringify(wrapper.text().match(textEmail))).toBe(
        JSON.stringify([textEmail.source])
      );

      expect(JSON.stringify(wrapper.text().match(textSubmit))).toBe(
        JSON.stringify([textSubmit.source])
      );

      expect(wrapper.find('input').first().exists()).toBeTruthy();
    });
  });

  describe('Link to Quiz', () => {
    const elementStart = element(
      <Start
        questions={[]}
        setQuestions={() => {}}
        quiz={{ ...quiz, countQuestions: 1, email: 'noone@nowhere.no' }}
        setQuiz={() => {}}
      />
    );

    beforeAll(() => {
      wrapper = mount(elementStart);
    });

    it('should render link to Quiz once email is set', () => {
      const textP = /Or you may return to the questions/;
      const textBttn = /Go to Quiz/;

      expect(JSON.stringify(wrapper.text().match(textP))).toBe(
        JSON.stringify([textP.source])
      );

      expect(JSON.stringify(wrapper.text().match(textBttn))).toBe(
        JSON.stringify([textBttn.source])
      );
    });
  });
});
