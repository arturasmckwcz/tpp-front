import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QuestionsWithAnswersDocument } from '../../graphql/quiz.generated';

const mocks = [
  {
    request: {
      query: QuestionsWithAnswersDocument,
    },
    result: () => ({
      data: {
        questionsWithAnswers: [
          {
            __typename: 'QuestionWithAnswers',
            question: 'Question #1',
            answers: [
              {
                __typename: 'Answer',
                id: 1,
                points: 10,
                answer: 'Answer #1 to Question #1',
              },
              {
                __typename: 'Answer',
                id: 2,
                points: 20,
                answer: 'Answer #2 to Question #1',
              },
              {
                __typename: 'Answer',
                id: 3,
                points: 30,
                answer: 'Answer #3 to Question #1',
              },
            ],
          },
          {
            __typename: 'QuestionWithAnswers',
            question: 'Question #2',
            answers: [
              {
                __typename: 'Answer',
                id: 4,
                points: 10,
                answer: 'Answer #1 to Question #2',
              },
              {
                __typename: 'Answer',
                id: 5,
                points: 30,
                answer: 'Answer #2 to Question #2',
              },
            ],
          },
        ],
      },
    }),
  },
];

export const element = (elementTest: JSX.Element) => (
  <MockedProvider mocks={mocks}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={elementTest} />
      </Routes>
    </BrowserRouter>
  </MockedProvider>
);

export const fixJest = () =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
