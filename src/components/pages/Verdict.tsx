import { useVerdictQuery } from '../../graphql/verdict.generated';

const Verdict = () => {
  const {
    data: verdict,
    loading,
    error,
  } = useVerdictQuery({ variables: { score: 60 } });

  return (
    <>
      <h1>This is the Verdict!</h1>
      <pre>verdict: {JSON.stringify(verdict, null, 2)}</pre>
      <pre>loading: {String(loading)}</pre>
      <pre>error: {JSON.stringify(error, null, 2)}</pre>
    </>
  );
};

export default Verdict;
