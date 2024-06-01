import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import NotFoundPage from "./pages/404NotFoundPage";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import { Assets } from "./pages/Assets";
import { Maintenance } from "./pages/Maintenance";
import DetialsPage from "./pages/DetialsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
      {
        path: "/maintenance",
        element: <Maintenance />,
      },
      {
        path: "/assets/:id",
        element: <DetialsPage />,
      },
    ],
  },
]);

export default router;
