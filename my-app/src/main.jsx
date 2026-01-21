import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { bubbleSortFunc } from "./utils/index.js";
console.log(bubbleSortFunc([1, 6, 3, 5, 2]));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
