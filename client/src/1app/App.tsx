import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router';
import RouterProvider from './router/RouterProvider';
import LoadingSpinner from '../6shared/ui/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { store } from './store';
import InitProvider from './initProvider/InitProvider';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Ошибка</h1>}>
        <Suspense fallback={<LoadingSpinner />}>
          <Provider store={store}>
            <InitProvider>
              <RouterProvider />
            </InitProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
