import { mount, ReactWrapper } from 'enzyme';

import Quiz from '.';
import { quizInit } from '../../common/quiz';
import { element, fixJest } from '../../common/testHelpers';

describe('<Quiz />', () => {
  let wrapper: ReactWrapper;

  const questions = [
    {
      id: 1,
      question: 'Question #1',
      answers: [
        { id: 1, answer: 'Answer #1 to Question #1', points: 10 },
        { id: 2, answer: 'Answer #2 to Question #1', points: 20 },
      ],
    },
  ];

  const email = 'nomail@nodomain.no';
  const quiz = { ...quizInit(questions.length), email };

  describe('<Question />', () => {
    const elementQuiz = element(
      <Quiz quiz={quiz} setQuiz={() => {}} questions={questions} />
    );

    beforeAll(() => {
      fixJest();
      wrapper = mount(elementQuiz);
    });

    it("should render Let's figure out!", () => {
      const textH1 = /Let's figure out!/;

      expect(JSON.stringify(wrapper.text().match(textH1))).toBe(
        JSON.stringify([textH1.source])
      );
    });

    it('should render the question #1 with answers and Submit button', () => {
      const textQuestion = new RegExp(questions[0].question);
      const textAnswer1 = new RegExp(questions[0].answers[0].answer);
      const textAnswer2 = new RegExp(questions[0].answers[1].answer);
      const textBttn = /Submit/;

      expect(JSON.stringify(wrapper.text().match(textQuestion))).toBe(
        JSON.stringify([textQuestion.source])
      );
      expect(JSON.stringify(wrapper.text().match(textAnswer1))).toBe(
        JSON.stringify([textAnswer1.source])
      );
      expect(JSON.stringify(wrapper.text().match(textAnswer2))).toBe(
        JSON.stringify([textAnswer2.source])
      );
      expect(JSON.stringify(wrapper.text().match(textBttn))).toBe(
        JSON.stringify([textBttn.source])
      );
    });
  });

  describe('Go to Verdict once all questions aswered', () => {
    const elementQuiz = element(
      <Quiz
        quiz={{ ...quiz, current: 1 }}
        setQuiz={() => {}}
        questions={questions}
      />
    );

    beforeAll(() => {
      wrapper = mount(elementQuiz);
    });

    it('should render Go to Verdict', () => {
      const textBttn = /Go to Verdict/;

      expect(JSON.stringify(wrapper.text().match(textBttn))).toBe(
        JSON.stringify([textBttn.source])
      );
    });
  });
});
