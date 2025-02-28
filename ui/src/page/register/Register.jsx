import React from 'react'
import Image1 from '../../assest/3d-graphic-designer-showing-thumbs-up-png 1(1).png'
import Image2 from '../../assest/congratulation.png'
import { ImageUtility } from '../../utility/ImageUtility'
import Avatar from '../../assest/noavatar.png'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    const [register, setRegister] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: '',
        officePhone: '',
        homePhone: '',
        email: '',
        companyName: '',
        address: '',
        password: '',
        confirmPassword: '',
        facebook: '',
        x: '',
        linkdin: '',
        instagram: '',
        img: '',
        profileImage: '',
        agentAttestation: ''
    })
    const handlePostImage = async(e) => {
        const data = await ImageUtility(e.target.files[0])

        setFormData((prev) => {
            return{
                ...prev,
                profileImage: data,
                img: e.target.files[0]
            }
        })
    }

    const uploadImage = async (type) => {
        let data = new FormData()
        data.append("file", type === 'image' ? formData.img : '')
        data.append("upload_preset", type === 'image' ? 'images_preset' : '')  
    
        try{
            let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            let resourceType = type === 'image' ? formData.img : 'video';
            let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        
            const fetchData = await fetch(api, {
                method: "POST",
                body: data
            })

            const res = await fetchData.json()
            return res.secure_url
        }catch(err){
            console.log(err)
        }
    }

    function handleChange(e){
        const { name, value, type, checked } = e.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    
    const handleAgentSubmit = async (e) => {
        e.preventDefault()

        const imgUrl = await uploadImage('image');
            
        setFormData((prev) => ({
            ...prev,
            profileImage: imgUrl
        }));

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
    
        const resData = await fetchData.json()
    }
  return (
    <div className='registeer_con'>
        <div className={register ? 'registeer dark' : 'registeer'}>
            <img src={Image1} alt='hackalton' className='register_image'/>
            <div className='register_con'>
                <h3>Register</h3>
                <p>Be part of the movement</p>

                <h2>Create an Account </h2>
                <h2><span>Aready have an account? <Link to='/login'>Sign in</Link></span></h2>

                <form onSubmit={handleAgentSubmit}>
                    <label htmlFor='image'>
                        <div className='imageSec'>
                            { formData.profileImage ? <img className='blogImage' src={formData.profileImage} alt='blog' height={20} width={20} /> : <img className='blogImage' src={Avatar} alt='blog' height={20} width={20} />}
                            <input id='image' className='imageUpload' type={'file'} placeholder="image" accept="image/*"  name="profileImage" onChange={handlePostImage} hidden/>
                        </div>
                    </label> 

                    <section>
                        <div className='input_con'>
                            <p>Name</p>
                            <input 
                                type='text'
                                placeholder='Enter the name of your group'
                                onChange={handleChange}
                                name='name'
                                value={formData.name}
                            />
                        </div>

                        <div className='input_con'>
                            <p>OfficePhone</p>
                            <input 
                                type='text'
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                name='officePhone'
                                value={formData.officePhone}
                            />
                        </div>

                        <div className='input_con'>
                            <p>HomePhone</p>
                            <input 
                                type='text'
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                name='homePhone'
                                value={formData.homePhone}
                            />
                        </div>

                    </section>

                    <section>

                        <div className='input_con'>
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                            />
                        </div>

                        <div className='input_con'>
                            <p>Company Name </p>

                            <input
                                type="text"
                                placeholder="Company name/ Agent Knowed name"
                                onChange={handleChange}
                                name="companyName"
                                value={formData.companyName}
                            />
                        </div>
                    </section>

                    <section>

                        <div className='input_con'> 
                            <p>Office address</p>
                            <input
                                type="text"
                                placeholder="Office address"
                                onChange={handleChange}
                                name="address"
                                value={formData.address}
                            />
                        </div>

                        <div className='input_con'>
                            <p>Password</p>

                            <input
                                type="text"
                                placeholder="Enter password"
                                onChange={handleChange}
                                name="password"
                                value={formData.password}
                            />  
                        </div>

                        <div className='input_con'>
                            <p>Confirm Password</p>

                            <input
                                type="text"
                                placeholder="Re-enter password"
                                onChange={handleChange}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                            />  
                        </div>
                    </section>

                    <section>

                        <div className='input_con'> 
                            <p>X Link</p>
                            <input
                                type="text"
                                placeholder="Enter your x link"
                                onChange={handleChange}
                                name="x"
                                value={formData.x}
                            />
                        </div>

                        <div className='input_con'>
                            <p>Linkldin</p>

                            <input
                                type="text"
                                placeholder="Enter your linkldin link"
                                onChange={handleChange}
                                name="linkdin"
                                value={formData.linkdin}
                            />  
                        </div>

                        <div className='input_con'>
                            <p>Instagram Url *</p>

                            <input
                                type="text"
                                placeholder="Enter your instagram link"
                                onChange={handleChange}
                                name="instagram"
                                value={formData.instagram}
                            />  
                        </div>
                    </section>

                    <h4 className='reviewss'>Please review your registration details before submitting</h4>
                        
                        <div className='checked'>
                            <input
                                type='checkbox'
                                id='isFriendly'
                                checked={formData.agentAttestation}
                                onChange={handleChange}
                                name='agentAttestation'
                            />

                            <span>I agreed with the event terms and conditions  and privacy policy</span>
                        </div>

                        <button>Register Now</button>
                </form>
            </div>
        </div>
        { register && <div className='congrat_con'>
            <div className='congrat'>
                <img src={Image1} alt='hackalton' />
                <h3>
                    Congratulations <br/>
                    you have successfully Registered!
                </h3>
                <p>Yes, it was easy and you did it!
                    check your mail box for next step</p>
                
                <h5 onClick={()=>{setRegister(false)}}>Back</h5>
            </div>
        </div>}
    </div>
  )
}

export default Register