import { createBrowserRouter } from "react-router";
import index from "../views/index";
import shop from "../views/shop/index";

const router = createBrowserRouter([
  {
    path: "/",
    Component: index,
  },
  {
    path: "/shop",
    Component: shop,
  },
]);

export default router;
