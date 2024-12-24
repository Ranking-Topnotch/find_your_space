import React from 'react'
import style from './homeList.module.css'
import Image8 from '../../assest/property1-680x510.jpg'
import { CiLocationOn } from "react-icons/ci";
import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaCamera } from "react-icons/fa6";
import { BsPersonVideo2 } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HomeList = () => {
  return (
    <div className={style.homeList_con}>
        <section className={style.home_sect_one_con}>
            <h1>Properties List </h1>
            <div className={style.home_sect_one}>
                <p><span>1</span> to <span>5</span> out of <span>10</span> Properties</p>
                <div>
                    <p>Sorted by:</p>
                    <select name="Sorted by">
                        <option value="All">All</option>
                        <option value="Price Low to High">Price Low to High</option>
                        <option value="Price High to Low">Price High to Low</option>
                        <option value="Data Old to New">Data Old to New</option>
                        <option value="Data New to Old">Data New to Old</option>
                    </select>
                </div>
            </div>
            
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
        </section>

    </div>
  )
}

export default HomeList