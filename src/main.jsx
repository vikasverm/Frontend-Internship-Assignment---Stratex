// index.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { createRoot } from 'react-dom/client';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
