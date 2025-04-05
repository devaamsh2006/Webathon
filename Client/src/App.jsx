import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Events from './components/pages/Events'
import Volunteer from './components/pages/Volunteer'

const browserRouter=createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"events",
        element:<Events />
      },
      {
        path:"volunteer/:id",
        element:<Volunteer />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={browserRouter} />
}

export default App
