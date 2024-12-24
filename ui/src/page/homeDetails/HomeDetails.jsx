import React from 'react'
import { Link } from 'react-router-dom'
import Image8 from '../../assest/property1-680x510.jpg'
import { IoCaretForwardOutline } from "react-icons/io5";
import { IoCaretBack } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GiLoveHowl } from "react-icons/gi";
import { CiShare2 } from "react-icons/ci";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import style from './homeDetails.module.css'
import { IoCameraSharp } from "react-icons/io5";
import { MdOutlineGarage } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GiResize } from "react-icons/gi";
import Image9 from '../../assest/IMG-20240621-WA0096.jpg'
import { GrStatusGood } from "react-icons/gr";
import { IoIosCheckmark } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { AiTwotonePrinter } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";


const HomeDetails = () => {
  return (
    <div className={style.detail_con}>
      <section className={style.detail_sect_one}>
        <div className={style.headerImage}>
          <div className={style.one_icon1}><IoCaretBack /></div>
          <img src={Image8} alt='Home finder house pixs' className={style.backImage} />
          <div className={style.one_icon1}><IoCaretForwardOutline /></div>
        </div>
        <div className={style.sect_one}>
          <div className={style.one_one}>
            <p>For Sale</p>
            <p>Featured</p>
            <p>Hot</p>
          </div>
          <div className={style.one_two}>
            <h1>Home in Merrick Way</h1>
            <h1>$540,000</h1>
          </div>
          <div className={style.one_three}>
            <div>
              <CiLocationOn className={style.three_icon}/>
              <h4>Merrick Way, Miami, FL 33134, USA</h4>
            </div>
            <div>
              <GiLoveHowl className={style.three_icon2} />
              <CiShare2 className={style.three_icon3}/>
            </div>
          </div>
        </div>
      </section>

      <section className={style.detail_sect_two}>
        <div className={style.sect_two_img}>
          <img src={Image8} alt='pics' height={100} width={200}/>
        </div>
        <div className={style.sect_two_img}>
          <img src={Image8} alt='pics' height={100} width={200}/>
        </div>
        <div className={style.sect_two_last}>
          <IoCameraSharp />
          <h2>2</h2>
          <h3>Photos</h3>
        </div>
      </section>

      <section className={style.detail_sect_three}>
        <div className={style.sect_three_one}>
          <h2>Overview</h2>
          <div></div>
          <h3>Property ID: RH-2015-06</h3>
          <p>Featured</p>
        </div>

        <div className={style.sect_three_two}>
          
          <section className={style.sect_three_left}>
            <section className={style.left_head}>
                <div>
                    <h3>Bedrooms</h3>
                    <div>
                      <IoIosBed className={style.five_icons}/>
                      <p>3</p>
                    </div>
                </div>

                <div>
                    <h3>Bathrooms</h3>
                    <div>
                      <FaShower className={style.five_icons}/>
                      <p>3</p>
                    </div>
                </div>

                <div>
                  <h3>Garage</h3>
                  <div>
                    <MdOutlineGarage className={style.five_icons}/>
                    <p>2</p>
                  </div>
                </div>

                <div>
                  <h3>Year Built</h3>
                  <div>
                    <IoCalendarClearOutline className={style.five_icons}/>
                    <p>2015</p>
                  </div>
                </div>
                
                <div>
                    <h3>Area</h3>
                    <div>
                      <FaVectorSquare className={style.five_icons}/>
                      <p>4500</p>    
                    </div>
                </div>

                <div>
                    <h3>Lot Size</h3>
                    <div>
                      <GiResize className={style.five_icons}/>
                      <p>4500</p>
                    </div>
                </div>
              </section>

              <div className={style.left_one}>
                <h2>Description</h2>
                <p>The very best waterfront location in Harbor Islands complete 
                  with private dock and amazing water frontage! Offering panoramic water views, 
                  this spacious home has volume ceilings and offers a rarely available ground floor 
                  master bedroom suite. The modern kitchen has been completely updated, leading to entertainment and family rooms that open to fabulous back yard and swimming pool overlooking the waterways. Must be seen!
                </p>
              </div>

              <div className={style.left_two}>
                <h2>Features</h2>
                <div>
                  
                    <div>
                      <GrStatusGood className={style.left_icon} />
                      <p>2 Stories</p>
                    </div>
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Central Cooling</p>
                    </div>
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Dual Sinks</p>
                    </div>
                 
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Dual Sinks</p>
                    </div>

                  
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Electric Range</p>
                    </div>
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Fire Place</p>
                    </div>
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Laundry Room</p>
                    </div>
                  

                  
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Lawn</p>
                    </div>
                    <div>
                      <GrStatusGood  className={style.left_icon}/>
                      <p>Swimming Pool</p>
                    </div>
                  
                </div>
              </div>
          </section>


          

          <section className={style.sect_three_right}>
            <div className={style.right_one}>
              <img src={Image9} alt='agent pixs' width={100}/>
              <div>
                <h4>Agent</h4>
                <h3>Luke Emmanuel <span><IoIosCheckmark /></span></h3> 
                <Link to='/agent'><h3>Know More</h3></Link>
              </div>
            </div>

            <div className={style.right_two}>
              <div>
                <h3>Office</h3>
                <h3>Office</h3>
                <h3>Fax</h3>
                <h3>WhatsApp</h3>
                <h3>Email</h3>
              </div>

              <div>
                <div>
                  <MdCall className={style.right_icon}/>
                  <p>+124 523 8564</p>
                </div>

                <div>
                  <MdCall className={style.right_icon}/>
                  <p>+124 523 8564</p>
                </div>

                <div>
                  <AiTwotonePrinter className={style.right_icon}/>
                  <p>+124 523 8564</p>
                </div>

                <div>
                  <FaWhatsapp className={style.right_icon}/>
                  <p>+124 523 8564</p>
                </div>

                <div>
                  <HiOutlineMail className={style.right_icon}/>
                  <p>emmaranking07@gmail.com</p>
                </div>
              </div>
              
            </div>

            <div className={style.contact_con}>
              <form>
                <div className={style.sect_two}>
                  <div className={style.sect_two_two}>
                    <div>
                      <MdAccountCircle className={style.contact_icon}/>
                      <input type='text' placeholder='Name' />
                    </div>
                    <div className={style.contact_line2}></div>
                  </div>
                </div>
                <div className={style.sect_two}>
                  <div className={style.sect_two_two}>
                    <div>
                      <MdOutlineLocalPhone className={style.contact_icon}/>
                      <input type='text' placeholder='Number' />
                    </div>
                    <div className={style.contact_line2}></div>
                  </div>
                </div>
                <div className={style.sect_two}>
                  <div className={style.sect_two_two}>
                    <div>
                      <MdOutlineEmail className={style.contact_icon}/>
                      <input type='text' placeholder='Email' />
                    </div>
                    <div className={style.contact_line2}></div>
                  </div>
                </div>
                <div className={style.sect_three}>
                  <div>
                    <FiMessageSquare className={style.contact_icon}/> 
                    <textarea name="Your Message" placeholder='Hello, I am interested in this house' ></textarea>
                  </div>
                </div>
                <button type='submit'>Send Message</button>
              </form>
            </div>
          </section>

        </div>
      </section>

      <div>
        <h2>Similiar Properties</h2>

        <section>
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
                            <Link to='/homeList/:id'><p>View Details </p></Link>
                            <IoChevronForward />
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </div>
    </div>
  )
}

export default HomeDetails