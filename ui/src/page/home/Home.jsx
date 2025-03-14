import React from 'react'
import style from './home.module.css'
import Nav from '../../components/nav/Nav';
import { FaSearchPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Image1 from '../../assest/cta-1.jpg'
import Image2 from '../../assest/cta-2.0.jpg'
import Image3 from '../../assest/cta-3.jpg'
import Image4 from '../../assest/IMG-20240621-WA0088.jpg'
import { IoChevronForward } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineStream } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Image5 from '../../assest/Kyan.png'
import Image6 from '../../assest/Nirastate.png'
import Image7 from '../../assest/Treva.png'
import Image8 from '../../assest/property1-680x510.jpg'
import Image9 from '../../assest/IMG-20240621-WA0096.jpg'
import Image10 from '../../assest/1200px-Burj_Khalifa.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (
    <div className={style.home_con}> 

        <section className={style.sect_two}>
           <div>
            <Nav /> 
           </div>

           <div className={style.sect_two_sect}>
                <div>
                    <h2>Discover your place to live </h2>
                    <p>We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.</p>
                </div>

                <div className={style.sect_two_form}>
                    <div>
                        <ul>
                            <li>For Rent</li>
                            <li>For Sale</li>
                        </ul>
                    </div>

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
                        <option value="4">4</option>
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

                    <div>
                        <div> <FaSearchPlus className={style.search} /></div>

                        <p><IoIosSearch className={style.search1}/> Search</p>
                    </div>        
                </div>
           </div>
        </section>

        <section className={style.sect_three}>
            <div>
                <h3>
                    We are your partner in creating a legacy building facade.
                </h3>

                <p>
                    We are one of the leading developers in europe providing exquisitely designed modern living villas in unique locations. We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.
                </p>

                <div>
                    <p>Read More  </p>
                    <IoChevronForward />
                </div>
            </div>

            <div className={style.sect_three_img}>
                <div>
                    <img src={Image1} alt='Real estate' />
                    <img src={Image3} alt='Real estate' />
                </div>

                <div>
                    <img src={Image2} alt='house for rent and sale' />
                    <img src={Image4} alt='house for sale' className={style.img}  />
                </div>
            </div>
        </section>

        <section className={style.sect_four}>
            <h3>Trusted by <span>2000+</span> busineses</h3>
            <div>
                <img src={Image5} alt='Real estate' />
                <img src={Image6} alt='Real estate' />
                <img src={Image7} alt='Real estate' />
            </div>
        </section>

        <section className={style.sect_five}>
            <h2>Our featured exclusives</h2>
            <ul>
                <li>All</li>
                <li>For Rent</li>
                <li>For Sale</li>
            </ul>

            <div className={style.sect_five_line}></div>

            <div>
                <div className={style.sect_five_main}>
                    <img src={Image8} alt='Real estate' />
                    <div>
                        <h3>Home in Merrick Way</h3>
                        <p>Merrick Way, Miami, FL 33134, USA</p>

                        <section>
                            <div>
                                <IoIosBed className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>
                            
                            <div>
                                <FaShower className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>

                            <div>
                                <FaVectorSquare className={style.five_icons}/>
                                <p>4500</p>
                            </div>
                        </section>

                        <div className={style.five_amount}>
                            <h2>$540,000</h2>
                            <div>
                                <Link to='/homeList/:id'><p>View Details </p></Link>
                                <IoChevronForward />
                            </div>
                        </div>
                     </div>
                </div>

                <div className={style.sect_five_main}  >
                    <img src={Image8} alt='Real estate' />
                    <div>
                        <h3>Home in Merrick Way</h3>
                        <p>Merrick Way, Miami, FL 33134, USA</p>

                        <section>
                            <div>
                                <IoIosBed className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>
                            
                            <div>
                                <FaShower className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>

                            <div>
                                <FaVectorSquare className={style.five_icons}/>
                                <p>4500</p>
                            </div>
                        </section>

                        <div className={style.five_amount}>
                            <h2>$540,000</h2>
                            <div>
                                <p>View Details </p>
                                <IoChevronForward />
                            </div>
                        </div>
                     </div>
                </div>

                <div className={style.sect_five_main}>
                    <img src={Image8} alt='pix' />
                    <div>
                        <h3>Home in Merrick Way</h3>
                        <p>Merrick Way, Miami, FL 33134, USA</p>

                        <section>
                            <div>
                                <IoIosBed className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>
                            
                            <div>
                                <FaShower className={style.five_icons}/>
                                <p>3</p>
                            </div>

                            <div></div>

                            <div>
                                <FaVectorSquare className={style.five_icons}/>
                                <p>4500</p>
                            </div>
                        </section>

                        <div className={style.five_amount}>
                            <h2>$540,000</h2>
                            <div>
                                <p>View Details </p>
                                <IoChevronForward />
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        <section className={style.sect_six}>
            <h1>What we are providing?</h1>
            
            <div>
                <div className={style.sect_six_sect}>
                    <MdOutlineStream className={style.sect_six_icon}/>
                    <h3>Property Management</h3>
                    <p>We provide a range of services to property owners and landlords to help them effectively manage their real estate investments. </p>
                    <div>
                        <p>Read More </p>
                        <IoChevronForward />
                    </div>
                </div>

                <div className={style.sect_six_sect}>
                    <MdOutlineStream className={style.sect_six_icon}/>
                    <h3>Property Management</h3>
                    <p>We provide a range of services to property owners and landlords to help them effectively manage their real estate investments. </p>
                    <div>
                        <p>Read More </p>
                        <IoChevronForward />
                    </div>
                </div>

                <div className={style.sect_six_sect}>
                    <MdOutlineStream className={style.sect_six_icon}/>
                    <h3>Property Management</h3>
                    <p>We provide a range of services to property owners and landlords to help them effectively manage their real estate investments. </p>
                    <div>
                        <p>Read More </p>
                        <IoChevronForward />
                    </div>
                </div>
            </div>
        </section>

        <section className={style.sect_ten}>
            <div className={style.sect_ten_one}>
                <h2> Explore New Neighbour-hood</h2>
                <p>
                    Great Place to relax, have a picnic or enjoy nature. You might discover unique stores, artisanal products along with local food.
                </p>
                <div className={style.sect_ten_read}>
                    <p>Read More</p>
                    <IoChevronForward />
                </div>
            </div>

            <div>
                <div className={style.sect_ten_con}>
                    <div className={style.sect_ten_sect}>
                        <div>
                            <h4>4 Properties</h4>
                            <h3>Apartment</h3>
                        </div>
                        <img src={Image8} alt='pixs' height={300} />
                        <div className={style.ten_sect}>
                            <p>View Details </p>
                            <IoChevronForward />
                        </div>
                    </div>

                    <div className={style.sect_ten_sect}>
                        <div>
                            <h4>4 Properties</h4>
                            <h3>Apartment</h3>
                        </div>
                        <img src={Image8} alt='pixs' height={300} />
                        <div className={style.ten_sect}>
                            <p>View Details </p>
                            <IoChevronForward />
                        </div>
                    </div>
                </div>

                <div className={style.sect_ten_con}>
                    <div className={style.sect_ten_sect}>
                        <div>
                            <h4>4 Properties</h4>
                            <h3>Apartment</h3>
                        </div>
                        <img src={Image8} alt='pixs' height={300} />
                        <div className={style.ten_sect}>
                            <p>View Details </p>
                            <IoChevronForward />
                        </div>
                    </div>

                    <div className={style.sect_ten_sect}>
                        <div>
                            <h4>4 Properties</h4>
                            <h3>Apartment</h3>
                        </div>
                        <img src={Image8} alt='pixs' height={300} />
                        <div className={style.ten_sect}>
                            <p>View Details </p>
                            <IoChevronForward />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={style.sect_eight}>
            <h1>Our Agents</h1>

            <div className={style.sect_eight_main}>
                <div className={style.sect_eight_main_one}>
                    <IoMdCheckmark className={style.sect_eight_main_icon1}/>  
                    <img src={Image9} alt='pixs' height={400}/>
                    <div>
                        <FaFacebook />
                        <RiTwitterXLine />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>

                <div className={style.sect_eight_main_two}>
                    <h4>Luke Emmanuel</h4>
                    <p>Real Estate Agent</p>
                    <div>
                        <h3>35 Sale</h3>
                        <div></div>
                        <h3>60 Rent</h3>
                    </div>
                    <div className={style.sect_eight_icon2} >
                        <IoMdCheckmark className={style.sect_eight_icon}/>
                        <p>Operating Since 2010</p>
                    </div>
                    <div className={style.sect_eight_icon2}>
                        <IoMdCheckmark className={style.sect_eight_icon}/>
                        <p>8700+ Buyers Served</p>
                    </div>
                    <div className={style.sect_eight_icon2}>
                        <IoMdCheckmark className={style.sect_eight_icon}/>
                        <p>35 Verified Properties</p>
                    </div>
                    <div className={style.sect_eight_contact}>
                        <MdCall />
                        <p>090-234-3142</p>
                    </div>
                    <p>Contact Agent <IoChevronForward className={style.eight_contact}/> </p>
                
                </div>
            </div>
        </section>

        <section className={style.sect_nine}>
            <img src={Image10} alt='Real estate' width={500} height={600} />

            <div className={style.sect_nine_main}>
                <h2>Are you looking for a dream home?</h2>
                <p>We can help you relize your dream of a new home.</p>
                <form>
                    <div>
                        <input type='text' placeholder='Your Name'/>
                        <input type="text" placeholder='Phone Number'/>
                    </div>
                    <input type="text" placeholder='Your Email Address'/>
                    <textarea name="House" id="" placeholder='What are you look for'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Home