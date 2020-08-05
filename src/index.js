import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import 'normalize.css';
import MarkDownProvider from './provider/markDownProvider';

render(
  <MarkDownProvider>
    <App />
  </MarkDownProvider>,
  document.getElementById('root')
);
