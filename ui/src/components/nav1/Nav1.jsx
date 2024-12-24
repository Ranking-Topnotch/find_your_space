import React from 'react'
import Nav from '../nav/Nav'
import style from './nav1.module.css'
import { FaSearchPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const Nav1 = () => {
  return (
    <div className={style.nav1_con}>
        <section>
            <Nav />
        </section>

        <div className={style.sect_two_form}>
            <div>
                <select name='loaction'>
                    <option value="All location">All Location</option>
                    <option value="Festac">Festac</option>
                    <option value="Ojo">Ojo</option>
                    <option value="VI">VI</option>
                    <option value="Lekki">Lekki</option>
                </select>

                <select name="Bed space">
                    <option value="All Bed Space">All Bed Space</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">5</option>
                </select>

                <select name="Bathroom space">
                    <option value="All Bathroom Space">All Bathroom Space</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <select name="Type">
                    <option value="All Type">All Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Apartment Building">Apartment Building</option>
                    <option value="Shop">Shop</option>
                    <option value="Office">Office</option>
                    <option value="Single Family">Single Family</option>
                    <option value="Villa">Villa</option>
                </select> 
            </div>   

            <div>
                <div> <FaSearchPlus className={style.search} /></div>

                <p><IoIosSearch className={style.search1}/> Search</p>
            </div>        

        </div>
    </div>
  )
}

export default Nav1