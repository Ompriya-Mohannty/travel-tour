import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Tours from './Pages/Tours'
import Gallery from './Pages/Gallery'
import ContactPage from './Pages/ContactPage'
import Footer from './Components/Footer'


const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/><Footer/></>
  },

  {
    path:'/about',
    element:<><Navbar/><About/><Footer/></>
  },

  {
    path:'/tours',
    element:<><Navbar/><Tours/><Footer/></>
  },

  {
    path:'/gallery',
    element:<><Navbar/><Gallery/><Footer/></>
  },

   {
    path:'/contact',
    element:<><Navbar/><ContactPage/><Footer/></>
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
