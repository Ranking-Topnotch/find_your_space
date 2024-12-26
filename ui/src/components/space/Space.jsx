import React from 'react'
import style from './space.module.css'
import { Link } from 'react-router-dom'
import Image8 from '../../assest/property1-680x510.jpg'
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const Space = () => {
  return (
    <section className={style.sect_five_con}>
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
  )
}

export default Space