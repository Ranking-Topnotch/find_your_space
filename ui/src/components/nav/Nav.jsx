import React, { useState, useEffect, useRef, useContext } from 'react'
import RealEstateLogo from '../../assest/images.png'
import { IoMdContact } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import style from './nav.module.css'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { UseContextLink } from '../../context/UseContextLink';
import { UseContextPages } from '../../context/UseContextPages';
import { UseContextNav } from '../../context/UseContextNav';


const Nav = () => {
    const [ hover, setHover ] = useState(false)
    const { nav, setNav }  = useContext(UseContextNav)
    const { linkNav, setLinkNav }  = useContext(UseContextLink)
    const { pageNav, setPageNav }  = useContext(UseContextPages)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ secondNav, setSecondNav ] = useState(false)
    const navRef = useRef(null);

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
    }

    const handleDropdownToggle = () => {
        setSecondNav( prev => !prev)
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
            </ul>
        </section>

        <section>
            { windowWidth <= 1050 && <section className={style.navbar}>
                { nav === false && <FaBars className={style.navIcon} onClick={handleNavBar}/> }
                { nav  && <MdClose className={style.navIcon} onClick={handleNavBar}/> }
            </section>}
            <Link to='/login'><IoMdContact className={style.contact}/></Link>
            { windowWidth > 650 && <Link to='/postspace'><p>Make an inquiry</p></Link>}
        </section>

    </div>
  )
}

export default Nav

