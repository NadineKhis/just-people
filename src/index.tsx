import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// import reportWebVitals from "./reportWebVitals";
import { APIContextProvider } from "./contexts/apiContext";

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals(console.log);
