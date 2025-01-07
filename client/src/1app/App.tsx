import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import RouterProvider from './router/RouterProvider';
import LoadingSpinner from '../6shared/ui/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Ошибка</h1>}>
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
