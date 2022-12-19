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
  answer?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  points?: Maybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  questionsWithAnswers?: Maybe<Array<Maybe<QuestionWithAnswers>>>;
  verdict?: Maybe<Verdict>;
};

export type QueryVerdictArgs = {
  score?: InputMaybe<Scalars["Int"]>;
};

export type QuestionWithAnswers = {
  __typename?: "QuestionWithAnswers";
  answers?: Maybe<Array<Maybe<Answer>>>;
  id?: Maybe<Scalars["Int"]>;
  question?: Maybe<Scalars["String"]>;
};

export type Verdict = {
  __typename?: "Verdict";
  score?: Maybe<Scalars["Int"]>;
  verdict?: Maybe<Scalars["String"]>;
};
