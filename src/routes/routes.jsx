import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
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
        loader: async () => {
          let fetchedToys = await fetch("testdata/toydata.json");
          return (await fetchedToys).json();
        },
      },
      {
        path: "/mytoys",
        element: <MyToys />,
        loader: async () => {
          let fetchedToys = await fetch("testdata/toydata.json");
          return (await fetchedToys).json();
        },
      },
      {
        path: "/toy",
        element: <ToyDetails />,
      },
    ],
  },
]);

export default router;
