import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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

function App() {
  const [count, setCount] = useState(0)

  return <div>App</div>
}

export default App
