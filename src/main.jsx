import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('')
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "jobs",
        element: <Jobs />
      },
      {
        path: "blog",
        element: <Blog />
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
