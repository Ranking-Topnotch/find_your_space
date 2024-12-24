import React from 'react'
import Image9 from '../../assest/IMG-20240621-WA0096.jpg'
import { IoIosCheckmark } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import style from './agent.module.css'


const Agent = () => {
  return (
    <div className={style.agent_con}>
      <h2>Agents</h2>

      <div>
        <div className={style.agent_body}>
          <img src={Image9} alt='agent' height={170} width={150}/>

          <div className={style.agent_main}>
            <h3>Luke Emmanuel <span><IoIosCheckmark /></span></h3> 
            <p> Company Agent at The James Estate Agents </p>
            <div></div>
            <div className={style.agent_phone}>
              <div>
                <MdCall className={style.agent_icon} />
                <div>
                  <h3>Office</h3>
                  <p>1-222-333-4444</p>
                </div>
              </div>
              <div>
                <MdCall className={style.agent_icon}/>
                <div>
                  <h3>Office</h3>
                  <p>1-222-333-4444</p>
                </div>
              </div>
              <div>
                <IoMail className={style.agent_icon}/>
                <div>
                  <h3>Email</h3>
                  <p>emmaranking07@gmail.com</p>
                </div>
              </div>

            </div>
            <div className={style.social_con}>
              <div>
                  <FaFacebook className={style.agent_socialmedia}/>
                  <RiTwitterXLine className={style.agent_socialmedia}/>
                  <FaLinkedin className={style.agent_socialmedia}/>
                  <FaInstagram className={style.agent_socialmedia}/>
              </div>

              <h3>4 Listed Property</h3>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Agent