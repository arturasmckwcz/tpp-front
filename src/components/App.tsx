import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import client from '../graphql/client';
import PageLayout from './common/PageLayout';
import QuizComponent from './pages/Quiz';
import Start from './pages/Start';
import Verdict from './pages/Verdict';
import { QuestionWithAnswers } from '../graphql/schema.generated';

export type Quiz = {
  email: string | null;
  questions: QuestionWithAnswers[] | null;
  current: number;
  score: number;
};

const App = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    email: null,
    questions: null,
    current: 0,
    score: 0,
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/' element={<Start setQuiz={setQuiz} />} />
            <Route
              path='/quiz'
              element={<QuizComponent quiz={quiz} setQuiz={setQuiz} />}
            />
            <Route
              path='/verdict'
              element={<Verdict quiz={quiz} setQuiz={setQuiz} />}
            />
            <Route path='*' element={<h1>Page not found!</h1>} />
          </Routes>
        </PageLayout>
      </Router>
    </ApolloProvider>
  );
};

export default App;
