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
import { ClerkProvider } from "@clerk/clerk-react";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.render(
  <Provider store={store}>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals(sendToVercelAnalytics);
