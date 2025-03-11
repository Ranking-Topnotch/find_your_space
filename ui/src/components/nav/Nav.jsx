import React, { useState, useEffect, useRef, useContext } from 'react'
import RealEstateLogo from '../../assest/images.png'
import { IoMdContact } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import style from './nav.module.css'
import { Link, useOutletContext } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { UseContextLink } from '../../context/UseContextLink';
import { UseContextPages } from '../../context/UseContextPages';
import { UseContextNav } from '../../context/UseContextNav';
import { UseContextNavHome } from '../../context/UseContextNavHome';
import { UserContext } from '../../context/UserContext';
import { UseIsAuthenticated } from '../../context/UseIsAuthenticated';



const Nav = () => {
    
    const [ hover, setHover ] = useState(false)
    const { nav, setNav }  = useContext(UseContextNav)
    const { linkNav, setLinkNav }  = useContext(UseContextLink)
    const { pageNav, setPageNav }  = useContext(UseContextPages)
    const { navHome, setNavHome }  = useContext(UseContextNavHome)
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ secondNav, setSecondNav ] = useState(false)
    const navRef = useRef(null);
    const { logout } = useContext(UserContext)
    const { isAuthenticated } = useContext(UseIsAuthenticated)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

            window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = () => {
        setHover(true);
    };
    
    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleNavBar = () => {
        setNav(!nav);
        setLinkNav(false); // Reset the other two
        setPageNav(false);
        setNavHome(false);
    }

    const handleDropdownToggle = () => {
        setSecondNav( prev => !prev)
    }

    const handleNavToggle = () => {
        setNavHome( prev => !prev)
    }

    const status = hover || secondNav

  return (
    <div className={style.nav_con}>
        <section>
            <img src={RealEstateLogo} alt='Real Estate' height={100} width={80} />
            <h2>REAL <span>ESTATE</span></h2>
        </section>

        <section>
            <ul className={nav ? style.navClosed : style.navOpen}>
                { windowWidth < 1050 && <li className={style.closed} onClick={handleNavBar}>Close <IoCloseSharp /></li>}
                <Link to='/'><li onClick={handleNavBar}>Home</li></Link>
                <div>
                    <li
                        onMouseEnter={windowWidth >= 1050 ? () => setHover(true) : null} 
                        onMouseLeave={windowWidth >= 1050 ? () => setHover(false) : null}
                        onClick={windowWidth < 1050 ? handleDropdownToggle : null} 
                    >
                        Real Estate
                        { windowWidth < 1050 && <IoIosArrowForward />}
                    </li>
                    { status && <ul onClick={handleNavBar} className={ windowWidth < 1050 ? style.nav_drop : style.nav_dropdown } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                        { windowWidth < 1050 && <li onClick={() => setSecondNav(false)}>Close <IoChevronBackOutline/></li>}
                        <Link to='/homeList'><li onClick={() => setSecondNav(false)}>Homes</li></Link>
                        <Link to='/agent'><li onClick={() => setSecondNav(false)}>Independent Agent</li></Link>
                        <li onClick={() => setSecondNav(false)}>Agency</li>
                    </ul>}
                </div>
                <li onClick={handleNavBar}>Property Single</li>
                <Link to='/blog'><li onClick={handleNavBar}>Blog</li></Link>
                <Link to='/contact'><li onClick={handleNavBar}>Contact</li></Link>
                { windowWidth <= 640 && <Link to='/postspace'><li onClick={handleNavBar}>Post New Space</li></Link>}
            </ul>
        </section>

        <section>
            { windowWidth <= 1050 && <section className={style.navbar}>
                { nav === false && <FaBars className={style.navIcon} onClick={handleNavBar}/> }
                { nav  && <MdClose className={style.navIcon} onClick={handleNavBar}/> }
            </section>}
            <Link to={ isAuthenticated ? '' : '/login'}><IoMdContact onClick={handleNavToggle} className={style.contact}/></Link>
            { windowWidth > 650 && <Link to='/contact'><p>Make an inquiry</p></Link>}
        </section>

        { (navHome && isAuthenticated ) && <section className={style.usersection}>
            <div>
                <Link to='/postblog'><p className={style.usersection_details} onClick={handleNavBar}>Post a blog</p></Link>
                <div></div>
                <Link to='/postspace'><p className={style.usersection_details} onClick={handleNavToggle}>Post a Space</p></Link>
                <div></div>
                <p onClick={handleNavToggle}><p className={style.usersection_details} onClick={logout}>Logout</p></p>
            </div>
        </section>}

    </div>
  )
}

export default Nav

