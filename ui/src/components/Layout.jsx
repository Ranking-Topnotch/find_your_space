import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom'
import Header from './header/Header';
import Nav1 from './nav1/Nav1';
import Footer from './footer/Footer';


const Layout = () => {
  const url = useLocation().pathname
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>
        <Header />
        { url === '/' ? '' : <Nav1 />}
        <ToastContainer />
        <Outlet />
        <Footer width={windowWidth}/>
    </>
  )
}

export default Layout