import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Top from "./routes/Top";
import Navigator from "./routes/Navigator";
import RouterError from "./components/RouterError";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouterError />,
  },
  {
    path: "/top",
    element: <Top />,
  },
  {
    path: "/navigator",
    element: <Navigator />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
