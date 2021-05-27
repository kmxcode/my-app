import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Reset } from 'styled-reset';
import { GlobalStyles } from './styledHelpers/GlobalStyles';
import { BrowserRouter as  Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './tools/store';


ReactDOM.render(

    <Provider store={store}>
      <Reset />
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);