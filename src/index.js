import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import "./css/global.css";
import AboutPage from './pages/aboutpage';
import ErrorPage from './pages/errorpage';
import HomePage from './pages/homepage';
import LogementPage from './pages/logementpage';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
    errorElement:
      <ErrorPage />
  },
  {
    path: "/about",
    element: (
      <AboutPage />
    )
  },
  {
    path: "/logements/:id", 
    element: (
      <LogementPage />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);