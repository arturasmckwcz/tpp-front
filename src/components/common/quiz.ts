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

export const questions = [
  {
    id: 1,
    question:
      'Is this the question. Rggdaojfkjsdvd jgaofnjac jfakjvbjc jdfjbckjBCJB jfbkjbjbck lDJFBlkjdbkJBCK kjdhjkbfh hdbfjhfjhfjH SDHJFJHFDJHBFJH JDHFJH?',
    answers: [
      {
        answer:
          'Yes, it is the question Rggdaojfkjsdvd jgaofnjac jfakjvbjc jdfjbckjBCJB jfbkjbjbck lDJFBlkjdbkJBCK kjdhjkbfh',
        points: 10,
      },
      {
        answer:
          'No, it is not the question Rggdaojfkjsdvd jgaofnjac jfakjvbjc jdfjbckjBCJB jfbkjbjbck lDJFBlkjdbkJBCK kjdhjkbfh',
        points: 20,
      },
    ],
  },
  {
    id: 2,
    question: 'Is this the answer?',
    answers: [
      { answer: 'Yes, it is the answer', points: 30 },
      { answer: 'No, it is not the answer', points: 40 },
    ],
  },
];
