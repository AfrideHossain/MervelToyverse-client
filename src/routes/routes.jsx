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
import SecureRoute from "../SecureRoute/SecureRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blog from "../pages/Blog/Blog";

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
        path: "/blog",
        element: <Blog />,
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
          let fetchedToys = await fetch(`${import.meta.env.VITE_BACKEND}/toys`);
          let fetchedToysRes = await fetchedToys.json();
          if (fetchedToysRes.success) {
            return fetchedToysRes.toys;
          }
        },
      },
      {
        path: "/mytoys",
        element: (
          <SecureRoute>
            <MyToys />
          </SecureRoute>
        ),
      },
      {
        path: "/updateToy/:id",
        element: (
          <SecureRoute>
            <UpdateToy />
          </SecureRoute>
        ),
        loader: async ({ params }) => {
          let fetchedToys = await fetch(
            `${import.meta.env.VITE_BACKEND}/toy/${params.id}`
          );
          let fetchedToysRes = await fetchedToys.json();
          if (fetchedToysRes.success) {
            return fetchedToysRes.toy;
          }
        },
      },
      {
        path: "/toy/:id",
        element: <ToyDetails />,
        loader: async ({ params }) => {
          let fetchedToys = await fetch(
            `${import.meta.env.VITE_BACKEND}/toy/${params.id}`
          );
          let fetchedToysRes = await fetchedToys.json();
          if (fetchedToysRes.success) {
            return fetchedToysRes.toy;
          }
        },
      },
    ],
  },
]);

export default router;
