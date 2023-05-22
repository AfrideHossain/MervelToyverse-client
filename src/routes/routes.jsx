import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtoy",
        element: <AddToy />,
      },
      {
        path: "/toys",
        element: <AllToys />,
      },
    ],
  },
]);

export default router;
