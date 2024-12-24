import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import style from './header.module.css'

const Header = () => {
  return (
    <section className={style.sect_one}>
            <div>
                <CiLocationOn className={style.icon}/>
                <p>2001 SW 16st St, Joyce, SE 200161 </p>
            </div>

            <div>
                <div>
                    <IoCallOutline className={style.icon} />
                    <p>09032520207</p>
                </div>
                <div></div>
                <div>
                    <CiMail className={style.icon}/>
                    <p> clemmanuel07@gmail.com</p>
                </div>
            </div>
        </section>
  )
}

export default Header