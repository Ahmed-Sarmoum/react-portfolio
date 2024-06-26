import React from 'react';
import ReactDOM from 'react-dom';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker"
import './assests/font-awesome/css/all.css'

const engine = new Styletron()

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister()