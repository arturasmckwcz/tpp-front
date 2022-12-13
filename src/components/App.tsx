import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageLayout from './common/PageLayout';
import Quiz from './pages/Quiz';
import Start from './pages/Start';
import Verdict from './pages/Verdict';

const App = () => {
  return (
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
  );
};

export default App;
