import React, { useContext } from 'react'
import RealEstateLogo from '../../assest/images.png'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import style from './footer.module.css'
import { UseContextLink } from '../../context/UseContextLink';
import { UseContextPages } from '../../context/UseContextPages';
import { UseContextNav } from '../../context/UseContextNav';

const Footer = ({ width }) => {
   const { linkNav, setLinkNav }  = useContext(UseContextLink)
   const { pageNav, setPageNav }  = useContext(UseContextPages)
   const { nav, setNav }  = useContext(UseContextNav)

    const toggleLinkNav = () => {
        setLinkNav(!linkNav);
        setNav(false); 
        setPageNav(false);
    };

    const togglePageNav = () => {
        setPageNav(!pageNav);
        setNav(false); 
        setLinkNav(false);
    };
    
  return (
    <div className={style.footer_con}>
        <div className={style.footer_sect_one}>
            <section className={style.sect_one}>
                <img src={RealEstateLogo} alt='Home finder' height={50} />
                <div>
                    <CiLocationOn className={style.icon}/>
                    <p>2001 SW 16st St, Joyce, SE 200161 </p>
                </div>
                <div>
                    <IoCallOutline className={style.icon} />
                    <p>09032520207</p>
                </div>
                <div>
                    <CiMail className={style.icon}/>
                    <p> clemmanuel07@gmail.com</p>
                </div>
            </section>

            <section className={style.sect_two}>
                <h2>Quick Links</h2>
                <div className={ linkNav ? style.navClosed : style.navOpen }>
                    { width < 1000 && <p onClick={toggleLinkNav}> Close </p>}
                    <p>Properties Listing</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                </div>
                { width < 1000 && <FaBars onClick={toggleLinkNav}/>}
            </section>

            <section className={style.sect_three}>
                <h2>Other Pages</h2>
                <div className={ pageNav ? style.navClosed : style.navOpen }>
                    { width < 1000 && <p onClick={togglePageNav}> Close </p>}
                    <p>Agent</p>
                    <p>Agencies</p>
                    <p>FAQ</p>
                </div>    
                { width < 1000 && <FaBars onClick={togglePageNav}/>}
            </section>

            <section className={style.sect_four}>
                <h2>Talk to an Expert</h2>
                <p>Get expert consultation regarding you Real Estate needs.</p>
                <p>Make an inquiry</p>
                <h3>Connect With Us</h3>
                <div>
                    <FaFacebook />
                    <RiTwitterXLine />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </section>
        </div>
        <div className={style.sect_line}></div>
        <div>
            <p>© 2024 RealHomes. All Rights Reserved</p>
            <p>Designed by	InspiryThemes</p>
        </div>
    </div>
  )
}

export default Footer