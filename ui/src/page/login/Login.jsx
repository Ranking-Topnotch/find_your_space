import React, { useContext, useState } from 'react'
import Image1 from '../../assest/3d-graphic-designer-showing-thumbs-up-png 1(1).png'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Login = () => {
    const [register, setRegister] = useState(false)
    const { login } = useContext(UserContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''  
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
   
    const handleAgentSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate("/postspace"); // Redirect after login
        } catch (error) {
            console.error(error.message);
        }
    };
    
  return (
    <div className='registeer_con'>
        <div className={register ? 'registeer dark' : 'registeer'}>
            <img src={Image1} alt='hackalton' className='register_image'/>

            <div className='register_con'>
                <h3>Login</h3>
                <p>Be part of the movement</p>

                <h2>Create an Account </h2>
                <h2><span>Don't have an account? <Link to='/register'>Sign up</Link></span></h2>

                <form onSubmit={handleAgentSubmit}>

                    <section>
                        <div className='input_con'>
                            <p>Email</p>
                            <input 
                                type='email'
                                placeholder='Enter your email'
                                onChange={handleChange}
                                name='email'
                                value={formData.email}
                            />
                        </div>

                        <div className='input_con'>
                            <p>Password</p>
                            <input 
                                type='text'
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                name='password'
                                value={formData.password}
                            />
                        </div>

                    </section>

                    <button>Proceed</button>
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

export default Login