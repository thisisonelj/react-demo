import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { bubbleSortFunc } from "./utils/index.js";
import { Provider } from "react-redux";
import store from "./store/redux-store/index.js";
console.log(bubbleSortFunc([1, 6, 3, 5, 2]));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </StrictMode>,
);
