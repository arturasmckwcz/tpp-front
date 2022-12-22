export type Quiz = {
  email: string | null;
  countQuestions: number;
  current: number;
  score: number;
};

export const quizInit = (countQuestions: number): Quiz => ({
  email: null,
  countQuestions,
  current: 0,
  score: 0,
});
