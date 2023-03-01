import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./JS/Store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="backG">
        <App />
      </div>
    </React.StrictMode>
  </Provider>
);
