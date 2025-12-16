import React from "react";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dairy from "./components/dairy/Dairy";
import SeaFood from "./components/seafood/SeaFood";
import Fruits from "./components/fruits/Fruits";
import Layout from "./components/layout/Layout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/fruits", element: <Fruits /> },
        { path: "/dairy", element: <Dairy /> },
        { path: "/seafood", element: <SeaFood /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
