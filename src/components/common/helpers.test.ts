import { getQuizStatus, QuizStatus } from './helpers';
import { Quiz, quizInit } from './quiz';

const email = 'nomail@nodomain.no';

describe('getQuizStatus()', () => {
  it('should return status NOT_STARTED', () => {
    const quiz: Quiz = {
      ...quizInit(0),
    };

    expect(getQuizStatus(quiz)).toBe(QuizStatus.NOT_STARTED);
  });

  it('should return status IN_PROGRESS', () => {
    const quiz: Quiz = {
      ...quizInit(1),
      email,
    };

    expect(getQuizStatus(quiz)).toBe(QuizStatus.IN_PROGRESS);
  });

  it('should return status FINISHED', () => {
    const quiz: Quiz = {
      ...quizInit(1),
      current: 1,
      email,
    };

    expect(getQuizStatus(quiz)).toBe(QuizStatus.FINISHED);
  });
});
