export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answer = {
  __typename?: "Answer";
  answer: Scalars["String"];
  id: Scalars["Int"];
  points: Scalars["Int"];
};

export type AnswerInput = {
  answer: Scalars["String"];
  id: Scalars["Int"];
  points: Scalars["Int"];
  questionID: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  setQuestionsAndAnswers?: Maybe<Scalars["Boolean"]>;
};

export type MutationSetQuestionsAndAnswersArgs = {
  questionsAndAnswers: QuestionsAndAnswers;
};

export type Query = {
  __typename?: "Query";
  questionsWithAnswers?: Maybe<Array<Maybe<QuestionWithAnswers>>>;
  verdict?: Maybe<Verdict>;
};

export type QueryVerdictArgs = {
  score?: InputMaybe<Scalars["Int"]>;
};

export type Question = {
  id: Scalars["Int"];
  question: Scalars["String"];
};

export type QuestionWithAnswers = {
  __typename?: "QuestionWithAnswers";
  answers: Array<Maybe<Answer>>;
  id: Scalars["Int"];
  question: Scalars["String"];
};

export type QuestionsAndAnswers = {
  answers: Array<InputMaybe<AnswerInput>>;
  questions: Array<InputMaybe<Question>>;
};

export type Verdict = {
  __typename?: "Verdict";
  score: Scalars["Int"];
  verdict: Scalars["String"];
};
