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
import { UseContextNavHome } from './context/UseContextNavHome'
import Blog from './page/blog/Blog'
import Login from './page/login/Login'
import Register from './page/register/Register'
import PostSpace from './page/postspace/PostSpace'
import PostBlog from './page/postblog/PostBlog'
import BlogDetails from './page/blogDetails/BlogDetails'
import ProtectedRoute from './components/ProtectedRoute'
import { UserProvider } from './context/UserContext'
import { UseIsAuthenticated } from './context/UseIsAuthenticated'


const App = () => {
  const [ linkNav, setLinkNav ]  = useState(false)
  const [ pageNav, setPageNav ]  = useState(false)
  const [ navHome, setNavHome ] =useState(false)
  const [ nav, setNav ] = useState(false)
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const pages = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homeList" element={<HomeList />} />
        <Route path="/homeList/:id" element={<HomeDetails />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogdetails" element={<BlogDetails />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/postspace" element={<PostSpace />} />
          <Route path="/postblog" element={<PostBlog />} />
        </Route>
      </Route>
    )
  );

  return (
    <UseIsAuthenticated.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserProvider>
        <UseContextNav.Provider value={{ nav, setNav }}>
          <UseContextLink.Provider value={{ linkNav, setLinkNav }}>
            <UseContextPages.Provider value={{ pageNav, setPageNav }}>
              <UseContextNavHome.Provider value={{ navHome, setNavHome }}>
                  <div className='app'>
                    <RouterProvider router={pages} />
                  </div> 
              </UseContextNavHome.Provider>
            </UseContextPages.Provider>
          </UseContextLink.Provider>
        </UseContextNav.Provider>
      </UserProvider>
    </UseIsAuthenticated.Provider>
  )
}

export default App
