import React, { useState } from 'react'
import style from './postblog.module.css'
import { ImageUtility } from '../../utility/ImageUtility'
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const PostBlog = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        agent_id: 2, 
        title: '',
        body1: '',
        title2: '',
        body2: '',                   
        blogImage: '',
        img: '',
        verifyInfo: Boolean
    })

    const handleBlogImage = async(e) => {
        const data = await ImageUtility(e.target.files[0])

        setFormData((prev) => {
            return{
                ...prev,
                blogImage: data,
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
    
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleBlogSubmit = async (e) => {
        e.preventDefault()

        const requiredFields = [
                    { key: "title", label: "Title" },
                    { key: "body1", label: "body1" },
                    { key: "title2", label: "title2" },
                    { key: "body2", label: "body2" }
                ];
            
                const missingFields = requiredFields.filter(field => !formData[field.key]);
            
                if (missingFields.length > 0) {
                    missingFields.forEach(field => {
                        toast.error(`${field.label} is required!`, { position: "top-right" });
                    });
                    return;
                }

        const imgUrl = await uploadImage('image');
            

        const updatedFormData = {
            ...formData,
            blogImage: imgUrl
        };

        try{
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/blog/newblog`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFormData)
            });

            const resData = await fetchData.json()

            if(resData.message === "Blog posted successfully"){
                toast(<p className={style.alert}>{resData.message}</p>)
                navigate('/blog')
            }else{
                toast(<p className={style.alert}>{resData.message}</p>) 
            }
        }catch(error){
            console.error("Error submitting space:", error);
            toast.error("Submission failed. Please try again.", { position: "top-right" });
        }
    
    }
    

  return (
    <div className={style.post_con}>
        <h1>Post a blog</h1>

        <form onSubmit={handleBlogSubmit}>
            <input type='number' name='agent_id' onChange={handleChange} value={formData.agent_id} hidden/>
            <section className={style.first_sect}>
                <div className={style.input_con}>
                    <p>Header 1</p>
                    <input 
                        type='text'
                        placeholder='Space type'
                        onChange={handleChange}
                        name='title'
                        value={formData.title}
                    />
                </div>

            </section>

            <section className={style.fourth_sect}>
                <div className={style.input_con}>
                    <p>Description 1</p>
                    <textarea 
                        type='text'
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        name='body1'
                        value={formData.body1}
                    />
                </div>
            </section>

            <section className={style.first_sect}>
                <div className={style.input_con}>
                    <p>Header 2</p>
                    <input 
                        type='text'
                        placeholder='Space type'
                        onChange={handleChange}
                        name='title2'
                        value={formData.title2}
                    />
                </div>

            </section>

            <section className={style.fourth_sect}>
                <div className={style.input_con}>
                    <p>Description 2</p>
                    <textarea 
                        type='text'
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        name='body2'
                        value={formData.body2}
                    />
                </div>
            </section>

            <section className={style.firth_sect}>
                <div className={style.imageSec_one}>
                    <label htmlFor='blogImage' >
                        <div >
                            { formData.blogImage ? <img className={style.blogImage} src={formData.blogImage} alt='house blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='blogImage' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="blogImage" onChange={handleBlogImage} hidden/>
                        </div>
                    </label>
                </div>

            </section>

            <button>Post New Space</button>
        </form>
    </div>
  )
}

export default PostBlog