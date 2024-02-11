import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

export { init };

function init() {
  ReactDOM.createRoot(document.getElementById("moonlight-root") as HTMLElement).render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
  );
}
