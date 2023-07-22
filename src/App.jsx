import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes)

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
