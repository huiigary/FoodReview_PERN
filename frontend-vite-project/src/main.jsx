import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // The app and index.css files affects app layout ??
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.jsx'
import { RestaurantDetails } from './routes/RestaurantDetails.jsx'
import { UpdateRestaurant } from './routes/UpdateRestaurant.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'
import { RestaurantContextProvider } from './RestaurantContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/details/:id',
    element: <RestaurantDetails />,
  },
  {
    path: '/update/:id',
    element: <UpdateRestaurant />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RestaurantContextProvider>
      <RouterProvider router={router} />
    </RestaurantContextProvider>
  </React.StrictMode>
)
