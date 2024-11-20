import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer } from "./Redux/reducer";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
const store = createStore(reducer, compose(applyMiddleware(thunk)));
const helmetContext = {};
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
