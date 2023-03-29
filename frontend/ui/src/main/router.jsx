import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Feeling} from "../pages/Feeling";
import {Chat} from "../pages/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feeling/>,
  },
  {
    path: "/chat",
    element: <Chat/>,
  },

]);

