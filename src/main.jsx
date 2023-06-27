import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, createBrowserRouter,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
