import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import LogIn from "../../Home/LogIn/LogIn";
import Register from "../../Home/Register/Register";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
