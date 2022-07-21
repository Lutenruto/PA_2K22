import * as React from "react";
import ReactDOM from "react-dom";
// import * as Sentry from '@sentry/browser'
// import ReactGA from 'react-ga'

import { App } from "./app/App.controller";
import reportWebVitals from "./reportWebVitals";
import { unregister } from "./serviceWorker";
import { GlobalStyle } from "./styles";

// Sentry.init({ dsn: 'XXX' })
// ReactGA.initialize('XXX')

export const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <App />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

unregister();
reportWebVitals();
