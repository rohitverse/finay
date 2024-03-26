import React from "react";
import MainLayout from "../Components/Layout/MainLayout/MainLayout";
import Profile from "../Pages/Profile/Profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MyWell from "../Pages/Profile/MyWell/MyWell";

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
              children: [
                {
                  path: "my-well",
                  element: <MyWell />,
                  
                },]
            },
            
          ],
        },
      ],
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Routes;
