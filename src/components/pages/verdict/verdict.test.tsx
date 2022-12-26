import { mount, ReactWrapper } from 'enzyme';

import Verdict from '.';
import { quizInit } from '../../common/quiz';
import { element, fixJest } from '../../common/testHelpers';

describe('<Verdict />', () => {
  let wrapper: ReactWrapper;

  const email = 'nomail@nodomain.no';
  const quiz = { ...quizInit(0), email };

  describe('<QuizResult />', () => {
    const elementVerdict = element(<Verdict quiz={quiz} setQuiz={() => {}} />);

    beforeAll(() => {
      fixJest();
      wrapper = mount(elementVerdict);
    });

    it('should render We still are not able...', () => {
      const textP =
        /We still are not able to figure out what kind of vert you are/;

      expect(JSON.stringify(wrapper.text().match(textP))).toBe(
        JSON.stringify([textP.source])
      );
    });
  });

  describe('not all questions have been answered', () => {
    const elementVerdict = element(
      <Verdict quiz={{ ...quiz, countQuestions: 1 }} setQuiz={() => {}} />
    );

    beforeAll(() => {
      wrapper = mount(elementVerdict);
    });

    it('should render Go to Quiz', () => {
      const textBttn = /Go to Quiz/;

      expect(JSON.stringify(wrapper.text().match(textBttn))).toBe(
        JSON.stringify([textBttn.source])
      );
    });
  });
});
