import React, { useState } from 'react'
import style from './postSpace.module.css'
import { ImageUtility } from '../../utility/ImageUtility'
import {  toast } from 'react-toastify';

const PostSpace = () => {
    const [register, setRegister] = useState(false)
    const [formData, setFormData] = useState({
        agent_id: 2,                    
        spaceType: '',
        status: '',
        address: '',
        rentAmount: '',
        bedroomNo: '',
        bathroomNo: '',
        garageNo: '',
        yearBuilt: '',
        feature1: '',
        feature2: '',
        feature3: '',
        feature4: '',
        feature5: '',
        houseImg1: '',
        houseImg2: '',
        houseImg3: '',
        spaceDesc: '',
        verifyInfo: Boolean
    })
    
    const handlePostImage = async (e) => {
        const { name, files } = e.target;
        if (!files.length) return;
    
        try {
            const data = await ImageUtility(files[0]); // Now properly waits for the data
            console.log(`Processed Image for ${name}:`, data);
    
            setFormData((prev) => ({
                ...prev,
                [name]: data, // Assign to the correct field dynamically
            }));
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };
    const uploadImages = async (images) => {
        let uploadedUrls = [];
    
        for (const img of images) {
            const data = new FormData();
            data.append("file", img);
            data.append("upload_preset", "images_preset");
    
            try {
                let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
                let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
                const response = await fetch(api, {
                    method: "POST",
                    body: data
                });
    
                const res = await response.json();
                uploadedUrls.push(res.secure_url); // Store only secure URLs
            } catch (error) {
                console.error("Error uploading image:", error);
                toast.error("Image upload failed!", { position: "top-right" });
            }
        }
    
        return uploadedUrls;
    };
    
    
    // const uploadImages = async (images) => {
    //     let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    //     let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    
    //     try {
    //         const uploadPromises = images.map(async (image) => {
    //             let data = new FormData();
    //             data.append("file", image);
    //             data.append("upload_preset", "images_preset");  
            
    //             const fetchData = await fetch(api, {
    //                 method: "POST",
    //                 body: data
    //             });
    
    //             const res = await fetchData.json();
    //             return res.secure_url;  // Return Cloudinary URL
    //         });
    
    //         return await Promise.all(uploadPromises); // Wait for all uploads to complete
    //     } catch (err) {
    //         console.log("Upload Error:", err);
    //         return [];
    //     }
    // };

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    
    const handleSpaceSubmit = async (e) => {
        e.preventDefault();
    
        const requiredFields = [
            { key: "spaceType", label: "Space Type" },
            { key: "status", label: "status" },
            { key: "address", label: "Address" },
            { key: "rentAmount", label: "Rent Amount" },
            { key: "bedroomNo", label: "Number of Bedrooms" },
            { key: "bathroomNo", label: "Number of Bathrooms" },
            { key: "garageNo", label: "Garage Number" },
            { key: "yearBuilt", label: "Year Built" },
            { key: "feature1", label: "Feature 1" },
            { key: "spaceDesc", label: "Space Description" },
            { key: "houseImg1", label: "House Image 1" },
            { key: "houseImg2", label: "House Image 2" },
            { key: "houseImg3", label: "House Image 3" },
        ];
    
        const missingFields = requiredFields.filter(field => !formData[field.key]);
    
        if (missingFields.length > 0) {
            missingFields.forEach(field => {
                toast.error(`${field.label} is required!`, { position: "top-right" });
            });
            return;
        }

        const imagesToUpload = [formData.houseImg1, formData.houseImg2, formData.houseImg3].filter(img => img);
        const imgUrls = await uploadImages(imagesToUpload);

        const updatedFormData = {
            ...formData,
            houseImg1: imgUrls[0] || "",
            houseImg2: imgUrls[1] || "",
            houseImg3: imgUrls[2] || "",
        };
    
        try {
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/space/postspace`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFormData) // Use updated data directly
            });
    
            const resData = await fetchData.json();
            console.log("Server Response:", resData);
            toast.success("Space submitted successfully!", { position: "top-right" });
    
        } catch (error) {
            console.error("Error submitting space:", error);
            toast.error("Submission failed. Please try again.", { position: "top-right" });
        }
    };
    

  return (
    <div className={style.post_con}>
        <h1>New Space</h1>

        <form onSubmit={handleSpaceSubmit}>
            <input type='number' name='agent_id' onChange={handleChange} value={formData.agent_id} hidden/>
            <section className={style.first_sect}>
                <div className={style.input_con}>
                    <p>Space Type</p>
                    <input 
                        type='text'
                        placeholder='Space type'
                        onChange={handleChange}
                        name='spaceType'
                        value={formData.spaceType}
                    />
                </div>
                <div className={style.input_con}>
                    <p>For Sale/Rent *</p>
                    <select name="status" value={formData.status} onChange={handleChange}>
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
                        placeholder="Space location"
                        onChange={handleChange}
                        name='address'
                        value={formData.address}
                    />
                </div>

                <div className={style.input_con}>
                    <p>Amount</p>
                    <input 
                        type='text'
                        placeholder="Space Prize"
                        onChange={handleChange}
                        name='rentAmount'
                        value={formData.rentAmount}
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
                        name="bedroomNo"
                        value={formData.bedroomNo}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>No of Bathroom</p>
                    <input
                        type="text"
                        placeholder="No of Bathroom"
                        onChange={handleChange}
                        name="bathroomNo"
                        value={formData.bathroomNo}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>No of Garage</p>
                    <input
                        type="text"
                        placeholder="No of Garage"
                        onChange={handleChange}
                        name="garageNo"
                        value={formData.garageNo}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Year Built</p>
                    <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        onChange={handleChange}
                        name="yearBuilt"
                        value={formData.yearBuilt}
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
                        name="feature1"
                        value={formData.feature1}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 2</p>
                    <input
                        type="text"
                        placeholder="Feature 2"
                        onChange={handleChange}
                        name="feature2"
                        value={formData.feature2}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 3</p>
                    <input
                        type="text"
                        placeholder="Feature 3"
                        onChange={handleChange}
                        name="feature3"
                        value={formData.feature3}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 4</p>
                    <input
                        type="text"
                        placeholder="Feature 4"
                        onChange={handleChange}
                        name="feature4"
                        value={formData.feature4}
                    />
                </div>

                <div className={style.input_con}> 
                    <p>Feature 5</p>
                    <input
                        type="text"
                        placeholder="Feature 5"
                        onChange={handleChange}
                        name="feature5"
                        value={formData.feature5}
                    />
                </div>
            </section>

            <section className={style.fourth_sect}>
                <div className={style.input_con}>
                    <p>Description</p>
                    <textarea 
                        type='text'
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        name='spaceDesc'
                        value={formData.spaceDesc}
                    />
                </div>
            </section>

            <section className={style.firth_sect}>
                <div className={style.imageSec_one}>
                    <label htmlFor='houseImg1' >
                        <div >
                            { formData.houseImg1 ? <img className={style.blogImage} src={formData.houseImg1} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='houseImg1' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="houseImg1" onChange={handlePostImage} hidden/>
                        </div>
                    </label>
                </div>

                <div className={style.imageSec_one}>
                    <label htmlFor='houseImg2' >
                        <div >
                            { formData.houseImg2 ? <img className={style.blogImage} src={formData.houseImg2} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='houseImg2' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="houseImg2" onChange={handlePostImage} hidden/>
                        </div>
                    </label>
                </div>

                <div className={style.imageSec_one}>
                    <label htmlFor='houseImg3' >
                        <div >
                            { formData.houseImg3 ? <img className={style.blogImage} src={formData.houseImg3} alt='blog' height={20} width={20} /> : <div>Upload image</div> }
                            <input id='houseImg3' className={style.imageUpload} type={'file'} placeholder="Upload image1" accept="image/*"  name="houseImg3" onChange={handlePostImage} hidden/>
                        </div>
                    </label>
                </div>
            </section>
                
            <div className='checked'>
                <input
                    type='checkbox'
                    id='isFriendly'
                    checked={formData.verifyInfo}
                    name='verifyInfo'
                    onChange={handleChange}
                />

                <span>I agreed that all information provided are true</span>
            </div>

            <button>Post New Space</button>
        </form>
    </div>
  )
}

export default PostSpace