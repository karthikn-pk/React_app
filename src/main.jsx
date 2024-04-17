import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Careers from "./components/Careers.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/signin",
        element: <Signup />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
