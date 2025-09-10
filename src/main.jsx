import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "./contexts/MainContext.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>
);
