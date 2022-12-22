import { Quiz } from './quiz';

export enum QuizStatus {
  NOT_STARTED = 'not started',
  IN_PROGRESS = 'in progress',
  FINISHED = 'finished',
}

export const getQuizStatus = (quiz: Quiz): QuizStatus => {
  if (!quiz.email) return QuizStatus.NOT_STARTED;
  if (quiz.questions?.length && quiz.current < quiz.questions?.length)
    return QuizStatus.IN_PROGRESS;
  return QuizStatus.FINISHED;
};
