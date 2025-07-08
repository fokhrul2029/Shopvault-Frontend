import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Error Element</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
