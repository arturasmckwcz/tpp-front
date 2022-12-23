import type * as Types from "./schema.generated";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type VerdictQueryVariables = Types.Exact<{
  score?: Types.InputMaybe<Types.Scalars["Int"]>;
}>;

export type VerdictQuery = {
  __typename?: "Query";
  verdict?: { __typename?: "Verdict"; score: number; verdict: string } | null;
};

export const VerdictDocument = gql`
  query verdict($score: Int) {
    verdict(score: $score) {
      score
      verdict
    }
  }
`;

/**
 * __useVerdictQuery__
 *
 * To run a query within a React component, call `useVerdictQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerdictQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerdictQuery({
 *   variables: {
 *      score: // value for 'score'
 *   },
 * });
 */
export function useVerdictQuery(
  baseOptions?: Apollo.QueryHookOptions<VerdictQuery, VerdictQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VerdictQuery, VerdictQueryVariables>(
    VerdictDocument,
    options
  );
}
export function useVerdictLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<VerdictQuery, VerdictQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VerdictQuery, VerdictQueryVariables>(
    VerdictDocument,
    options
  );
}
export type VerdictQueryHookResult = ReturnType<typeof useVerdictQuery>;
export type VerdictLazyQueryHookResult = ReturnType<typeof useVerdictLazyQuery>;
export type VerdictQueryResult = Apollo.QueryResult<
  VerdictQuery,
  VerdictQueryVariables
>;
