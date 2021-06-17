import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { LoadServiceContext } from './contexts/contexts';

import LoadService from './services/load-service';
import { LoadServiceProvider } from './components/load-service-context';

const loadService = new LoadService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <LoadServiceProvider value={loadService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoadServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.querySelector('#root')
);
