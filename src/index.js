import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux Components
import { Provider } from "react-redux";
import { store } from "./state";

ReactDOM.render(
  // Menginisialisasi redux agar dapat digunakan dalam komponen
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
