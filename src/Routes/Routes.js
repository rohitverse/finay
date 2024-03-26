import React from "react";
import MainLayout from "../Components/Layout/MainLayout/MainLayout";
import Profile from "../Pages/Profile/Profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MyWell from "../Pages/Profile/MyWell/MyWell";
import Library from "../Pages/Profile/Library/Library";
import Songs from "../Pages/Profile/Library/Songs/Songs";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "my-well",
              element: <MyWell />,
            },
            {
              path: "library",
              element: <Library />,
              children: [
                {
                  path: "songs",
                  element: <Songs />,
                },
                {
                  path: "events",
                  element: <Songs />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Routes;
