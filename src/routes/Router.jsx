import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <h1>Welcome to the PH Apps Store</h1>,
      },
      {
        path: "about",
        element: <h1>About Us</h1>,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
