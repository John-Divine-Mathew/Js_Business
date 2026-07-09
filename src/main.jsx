import React from "react";
import ReactDOM from "react-dom/client";
import { CustomerProvider } from "./context/CustomerContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </React.StrictMode>
);