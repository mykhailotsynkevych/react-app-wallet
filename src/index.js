import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react-app-wallet">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
