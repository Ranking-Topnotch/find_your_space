import React, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './page/home/Home'
import Contact from './page/contact/Contact'
import HomeList from './page/listHome/HomeList'
import HomeDetails from './page/homeDetails/HomeDetails'
import Agent from './page/agent/Agent'
import { UseContextLink } from './context/UseContextLink'
import { UseContextPages } from './context/UseContextPages'
import { UseContextNav } from './context/UseContextNav'
import Blog from './page/blog/Blog'
import Login from './page/login/Login'
import Register from './page/register/Register'

const App = () => {
  const [ linkNav, setLinkNav ]  = useState(false)
  const [ pageNav, setPageNav ]  = useState(false)
  const [ nav, setNav ] = useState(false)

  
  const pages = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route path='/' element={ <Home />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/homeList' element={<HomeList />} />
        <Route path='/homeList/:id' element={<HomeDetails />} />
        <Route path='/agent' element={<Agent />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} /> 
    </Route>
  )) 

  return (
    <UseContextNav.Provider value={{ nav, setNav }}>
      <UseContextLink.Provider value={{ linkNav, setLinkNav }}>
        <UseContextPages.Provider value={{ pageNav, setPageNav }}>
          <div className='app'>
            <RouterProvider router={pages} />
          </div> 
        </UseContextPages.Provider>
      </UseContextLink.Provider>
    </UseContextNav.Provider>
  )
}

export default App
