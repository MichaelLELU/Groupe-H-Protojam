import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [{
      path: "/",
      element: <HomePage/>,
      loader: () => fetch("https://trefle.io/api/v1/plants?token=tz25VA3y6PKGuKIrAqjsDWEy0DzT-fq9ORXOIU3rPeI")
    },
    {
      path: "/detail/:id",
      element:<DetailPage/>
    },
    {
      path: "/about",
      element:<AboutPage/>
    },
    {
      path: "*",
      element:<h1>Page not found Error 404 </h1>
    }],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);