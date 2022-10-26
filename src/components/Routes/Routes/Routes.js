import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Home/Blog/Blog";
import FAQ from "../../Home/FAQ/FAQ";
import Home from "../../Home/Home/Home";
import LogIn from "../../Home/LogIn/LogIn";
import NotFound from "../../Home/NotFound/NotFound";
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
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
