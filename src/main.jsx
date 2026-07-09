import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";
import { CustomerProvider } from "./context/CustomerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomerProvider>
      <Toaster position="top-center" />
      <App />
    </CustomerProvider>
  </React.StrictMode>
);