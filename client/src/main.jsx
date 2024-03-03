import ReactDOM from 'react-dom/client'
import React from 'react'
import './Style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import App from './App';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/contact',
        element: <ContactPage />,
        loader: async () => {
          console.log('Thanks Mister')
          return 'Thanks Mister'
        },

      }

    ]
  },
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
);
