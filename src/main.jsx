import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Skills from './pages/Home/Skills/Skills';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "skills",
        element: <Skills></Skills>
      }
    ]
  },
  {
    path: '*',
    element: <div>Error</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
