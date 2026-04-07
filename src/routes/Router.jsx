import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
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
