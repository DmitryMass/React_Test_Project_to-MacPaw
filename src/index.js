import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './Components/App';
import { Provider } from 'react-redux';

//
import { store } from './Store/store';
import './Styles/reset.css';
import './Styles/constant.css';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
