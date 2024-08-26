import "./index.less";
import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./reducers";
import App from "./components/App";

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
