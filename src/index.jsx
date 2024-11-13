import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './app/store';

import './index.css';
import AgreementView from './View/AgreementView';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AgreementView />
    </Provider>
  </StrictMode>
);
