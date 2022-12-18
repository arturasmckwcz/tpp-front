import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import client from '../graphql/client';
import PageLayout from './common/PageLayout';
import Quiz from './pages/Quiz';
import Start from './pages/Start';
import Verdict from './pages/Verdict';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/verdict' element={<Verdict />} />
            <Route path='*' element={<h1>Page not found!</h1>} />
          </Routes>
        </PageLayout>
      </Router>
    </ApolloProvider>
  );
};

export default App;
