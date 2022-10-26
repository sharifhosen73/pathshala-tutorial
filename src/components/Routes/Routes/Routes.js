import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import LogIn from "../../Home/LogIn/LogIn";
import PremiumCourse from "../../Home/PremiumCourse/PremiumCourse";
import Register from "../../Home/Register/Register";
import SubjectDetails from "../../Home/SubjectDetails/SubjectDetails";
import Main from "../../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/subjects"),
      },
      {
        path: "/subjects/:id",
        element: <SubjectDetails />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/subjects/${params.id}`);
        },
      },
      {
        path: "/premium-subject/:id",
        element: (
          <PrivateRouter>
            <PremiumCourse />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/subjects/${params.id}`);
        },
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
