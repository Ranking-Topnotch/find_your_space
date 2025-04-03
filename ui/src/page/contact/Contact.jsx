import React, { useState } from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import style from './contact.module.css'

const Contact = () => {
  const [ login, setLogin ] = useState({
    name: '',
    textarea: ''
  })

  const handleClick = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    const nume = value.split(/\s+/)
    
    //console.log(e.target.value.split(/\s+/).words.length)
    setLogin((prev) => {
      if(nume.length >  4){
        return{...prev}
      }
      return{
        ...prev,
        [ name ] : value
      }
    }) 
  }


  return (
    <div className={style.contact_con}>
      <h2>Contact</h2>

        <div className={style.contact_sec_con}>
          <form>
            <div className={style.sect_one}>
              <div>
                <p>Name</p>
                <div className={style.sect_one_one}>
                  <div>
                    <MdAccountCircle className={style.contact_icon}/>
                    <input type="text" placeholder='Your Name'/>
                  </div>
                  <div className={style.contact_line}></div>
                </div>
              </div>

              <div>
                <p>Phone</p>
                <div className={style.sect_one_one}>
                  <div>
                    <MdOutlineLocalPhone className={style.contact_icon}/>
                    <input type="text" placeholder='Your Phone'/>
                  </div>
                  <div className={style.contact_line}></div>
                </div>
              </div>
            </div>
            <div className={style.sect_two}>
              <p>Email</p>
              <div className={style.sect_two_two}>
                <div>
                  <MdOutlineEmail className={style.contact_icon}/>
                  <input type='text' placeholder='Your Email' />
                </div>
                <div className={style.contact_line2}></div>
              </div>
            </div>
            <div className={style.sect_three}>
              <p>Message</p>
              <div>
                <FiMessageSquare className={style.contact_icon}/> 
                <textarea placeholder="textarea" name="textarea" value={login.textarea} onChange={handleClick}></textarea>
              </div>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
    
    </div>
  )
}

export default Contact