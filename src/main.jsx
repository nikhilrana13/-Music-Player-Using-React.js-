import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx"
import Search from "./Pages/Search/Search.jsx"
import Songs from './Pages/Songs/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Search",
    element: <Search/>
  },
  {
    path: "/Songs",
    element: <Songs />
  }

])






const root = createRoot(document.getElementById("root"))
root.render(
  <RouterProvider router={router} />
)