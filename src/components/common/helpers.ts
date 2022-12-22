import { Quiz } from './quiz';

export enum QuizStatus {
  NOT_STARTED = 'not started',
  IN_PROGRESS = 'in progress',
  FINISHED = 'finished',
}

export const getQuizStatus = (quiz: Quiz): QuizStatus => {
  if (!quiz.email) return QuizStatus.NOT_STARTED;
  if (quiz.countQuestions && quiz.current < quiz.countQuestions)
    return QuizStatus.IN_PROGRESS;
  return QuizStatus.FINISHED;
};
