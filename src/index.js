import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

import "./index.css";
import "antd/dist/antd.min.css";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
