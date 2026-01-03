import { createBrowserRouter } from "react-router";
import index from "../views/index";

const router = createBrowserRouter([
  {
    path: "/",
    Component: index,
  },
]);

export default router;
