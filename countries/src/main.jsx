



import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx';
import Root from './components/Root.jsx';
import HomePage from './pages/HomePage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [


      {
        path: "/",
        element: <HomePage />
      },

/*       


{
        path: "/movies",
        element: <Movies />
      },

      {
        path: "/movies/:id",
        element: <MoviesDetails />
      }, */

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
