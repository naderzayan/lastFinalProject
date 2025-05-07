import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import AppLayout from './components/Applayout'
import Login from './components/Login'
import "./style/app.scss"

export default function App() {
  const Routing = createBrowserRouter([
    {path: "/", element: <AppLayout />, children :[
      {path: "", element: <HomePage /> },
      {path: "home", element: <HomePage />},
      {path: "shop", element: <Shop />},
      {path: "blog", element: <Blog />},
      {path: "about us", element: <AboutUs />},
      {path: "contact us", element: <ContactUs />},
      {path: "login", element: <Login />},
      {path: "*", element: <h1>404 No Page Found</h1>}
    ]}
  ])
  return (
    <div>
      <RouterProvider router={Routing} />
    </div>
  )
}
