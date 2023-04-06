import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

let container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
