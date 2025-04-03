import React from 'react'
import Image1 from '../../assest/resturant-interrior-1-1.jpg'
import Image9 from '../../assest/IMG-20240621-WA0096.jpg'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import style from './blog.module.css'
import Image2 from '../../assest/noavatar.png'

const Blog = () => {
  return (
    <div className={style.blogCon}>
        <div className={style.blog_first}>
            <h1>News</h1>
            <p>Check out market update</p>

            <section className={style.blog_firstSect}>
                <div>
                    <img src={Image1} alt='find a place to live'/>
                    <div className={style.firstSect_agent}>
                        <img src={Image2} alt='profile of agent' className={style.avatar}/>
                        <p>John Doe</p>
                    </div>
                </div>
                <div className={style.firstSect_time}>
                    <IoCalendarNumberOutline  className={style.firstTime_avatar}/> 
                    <p>15 June, 2025 </p>
                    <p>Luxury</p>
                </div>
                <div className={style.firstContent} >
                    <h2>
                    As The Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool
                    </h2>
                    <p>
                    Enthusiastically disintermediate progressive innovation before high-payoff metrics. Intrinsicly generate sticky services without B2B e-services. Competently revolutionize parallel applications with plug-and-play meta-services. Competently leverage other’s global outsourcing for superior deliverables.
                    </p>
                </div>
            </section>
        </div>

        <div className={style.blog_second}>

            <div className={style.second_first}>
                <h2>Recent Post </h2>
                <h3>
                    <span><GoDash /></span>
                    As The Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool
                </h3>
                <h3>
                   <span><GoDash /></span>
                    Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool 
                </h3>
                <h3>
                    <span><GoDash /></span>
                    Dramatically benchmark corporate leadership via scalable deliverables
                </h3>
            </div>

            <div className={style.second_agent}>
                <h3>Agent</h3>
                <div className={style.agent}>
                    <img src={Image9} alt="Agent" />
                    <div>
                        <h2>Luke Emmanuel</h2>
                        <div>
                            <IoMail className={style.agent_icon}/>
                            <p>emmaranking07@gmail.com</p>            
                        </div>
                        <div>
                            <MdCall className={style.agent_icon}/>
                            <p>+2349034520407</p>            
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.property}>
                <h2>Property Type </h2>
                <div>

                    <p>- Apartment</p>
                    <p>- A Room Self Contain</p>
                    <p>- Mini flat</p>
                    <p>- Shop</p>
                    <p>- A Room and Palour</p>
                    <p>- Two (2) Bedroom flat</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog