import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import react from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.jsx'
import { RestaurantDetails } from './routes/RestaurantDetails.jsx'
import { Update } from './routes/Update.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/details',
    element: <RestaurantDetails />,
  },
  {
    path: '/update',
    element: <Update />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
