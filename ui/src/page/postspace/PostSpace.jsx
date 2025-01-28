import React from 'react'
import style from './postSpace.module.css'
const PostSpace = () => {
    const [register, setRegister] = React.useState(false)
        const [formData, setFormData] = React.useState({
            teamName: '',
            phone: '',
            email: '',
            projectTopic: '',
            category: '',
            groupSize: '',
        })
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    const newPost = false
  return (
    <div className={style.post_con}>
        <h1>New Space</h1>

        <form>
            <section className={style.first_sect}>
                <div className={style.input_con}>
                    <p>Space Type</p>
                    <input 
                        type='text'
                        placeholder='Enter the name of your group'
                        onChange={handleChange}
                        name='teamName'
                        value={formData.teamName}
                    />
                </div>
                <div className={style.input_con}>
                    <p>For Sale/Rent *</p>
                    <select name="Space type" id="">
                        <option value="Select an option">Select an option</option>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                    </select>
                </div>

            </section>

            <section className={style.second_sect}>
                <div className={style.input_con}>
                    <p>Address</p>
                    <input 
                        type='text'
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        name='address'
                        value={formData.phone}
                    />
                </div>
            </section>

            <section className={style.third_sect}>
                <div className={style.input_con}> 
                    <p>No of Bedroom</p>
                    <input
                        type="text"
                        placeholder="No of Bedroom"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>No of Bathroom</p>
                    <input
                        type="text"
                        placeholder="No of Bathroom"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>No of Garage</p>
                    <input
                        type="text"
                        placeholder="No of Garage"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Year Built</p>
                    <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Size</p>
                    <input
                        type="text"
                        placeholder="Size"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>
            </section>

            <section className={style.third_sect}>
                <div className={style.input_con}> 
                    <p>Feature 1</p>
                    <input
                        type="text"
                        placeholder="Feature 1"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 2</p>
                    <input
                        type="text"
                        placeholder="Feature 2"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 3</p>
                    <input
                        type="text"
                        placeholder="Feature 3"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 4</p>
                    <input
                        type="text"
                        placeholder="Feature 4"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 5</p>
                    <input
                        type="text"
                        placeholder="Feature 5"
                        onChange={handleChange}
                        name="category"
                        value={formData.category}
                    />
                </div>
            </section>

            <section className={style.fourth_sect}>
                <div className={style.input_con}>
                    <p>Description</p>
                    <textarea 
                        type='text'
                        placeholder="Enter your phone number"
                        // onChange={handleChange}
                        // name='address'
                        // value={formData.phone}
                    />
                </div>
            </section>

            <section className={style.firth_sect}>
                <div className={style.imageSec_one}>
                    <label htmlFor='image' >
                        <div >
                            { newPost ? <img className={style.blogImage} src={newPost.image} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='image' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="image" onChange={()=>{}} hidden/>
                        </div>
                    </label>
                </div>

                <div className={style.imageSec_one}>
                    <label htmlFor='image' >
                        <div >
                            { newPost ? <img className={style.blogImage} src={newPost.image} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='image' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="image" onChange={()=>{}} hidden/>
                        </div>
                    </label>
                </div>

                <div className={style.imageSec_one}>
                    <label htmlFor='image' >
                        <div >
                            { newPost ? <img className={style.blogImage} src={newPost.image} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='image' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="image" onChange={()=>{}} hidden/>
                        </div>
                    </label>
                </div>
            </section>
                
            <div className='checked'>
                <input
                    type='checkbox'
                    id='isFriendly'
                    //repaced the value property with the
                    // checked property for checkbox
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name='isFriendly'
                />

                <span>I agreed that all information provided are true</span>
            </div>

            <button>Post New Space</button>
        </form>
    </div>
  )
}

export default PostSpace