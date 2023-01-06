import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/admin/Login';
import Template from './Template';
import Projects from './Pages/projects/Projects';
import CreateProject from './Pages/projects/CreateProject';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"admin",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin/dashboard", // need to make sure users cannot access this route individually
    element: <Template/>,
    children: [
      {
        path:'projects',
        element: <Projects/>
      },
      {
        path:'projects/create',
        element: <CreateProject/>
      }

    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
