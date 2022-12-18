import type * as Types from "./schema.generated";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type QuestionsWithAnswersQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type QuestionsWithAnswersQuery = {
  __typename?: "Query";
  questionsWithAnswers?: Array<{
    __typename?: "QuestionWithAnswers";
    question?: string | null;
    answers?: Array<string | null> | null;
  } | null> | null;
};

export const QuestionsWithAnswersDocument = gql`
  query questionsWithAnswers {
    questionsWithAnswers {
      question
      answers
    }
  }
`;

/**
 * __useQuestionsWithAnswersQuery__
 *
 * To run a query within a React component, call `useQuestionsWithAnswersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsWithAnswersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsWithAnswersQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestionsWithAnswersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    QuestionsWithAnswersQuery,
    QuestionsWithAnswersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    QuestionsWithAnswersQuery,
    QuestionsWithAnswersQueryVariables
  >(QuestionsWithAnswersDocument, options);
}
export function useQuestionsWithAnswersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QuestionsWithAnswersQuery,
    QuestionsWithAnswersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    QuestionsWithAnswersQuery,
    QuestionsWithAnswersQueryVariables
  >(QuestionsWithAnswersDocument, options);
}
export type QuestionsWithAnswersQueryHookResult = ReturnType<
  typeof useQuestionsWithAnswersQuery
>;
export type QuestionsWithAnswersLazyQueryHookResult = ReturnType<
  typeof useQuestionsWithAnswersLazyQuery
>;
export type QuestionsWithAnswersQueryResult = Apollo.QueryResult<
  QuestionsWithAnswersQuery,
  QuestionsWithAnswersQueryVariables
>;
