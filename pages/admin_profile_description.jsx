'use client';
import React, { useEffect, useState } from 'react';
import Layout from '../src/layouts/Layout'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction } from '../src/store/category/asyncActions';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';

const Admin_profile_description = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('Business');

    const addCategoryData = useSelector((state) => state?.category?.addCategory);

    useEffect(() => {
        if (addCategoryData?.loading === false) {
            if (addCategoryData?.data?.status) {
                router.push('/');
                addCategoryData.data = null;
            }
            setLoading(false);
        }
    }, [addCategoryData]);

    const [data, setData] = useState({
        image: null,
        name: '',
        profession: '',
        age: '',
        maritalStatus: '',
        nationality: '',
        hometown: '',
    });

    const [formData, setFormData] = useState({
        full_Name: '',
        nick_names: '',
        height: '',
        weight: '',
        body_measurements: '',
        eye_color: '',
        hair_color: '',
        dob: '',
        zodiac_sign: '',
        food_habit: '',
        present_address: '',
        religion: '',
        signature: '',
        school: '',
        college: '',
        educational_status: '',
        educational_awards: '',
        salary: '',
        net_Worth: '',
        cars: '',
        watches: '',
        passion_behind: '',
        debut_first_business: '',
        turning_point: '',
        first_Success: '',
        awards_Achievements: '',
        food: '',
        actor_actress: '',
        musicians: '',
        singers: '',
        songs: '',
        books: '',
        hobbies: '',
        films: '',
        color: '',
        perfume: '',
        holiday_destinations: '',
        father: null,
        mother: null,
        siblings: null,
        spouse: null,
        children: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createCategory = () => {
        dispatch(addCategoryAction({ type, data, formData }));
    }

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageLoading = (imageData, setDataVel) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview({ ...imagePreview, [imageData.key]: reader.result });
            setDataVel(prevData => ({
                ...prevData,
                [imageData.key]: reader.result
            }));
        };
        if (typeof imageData.value === 'string') {
            setImagePreview({ ...imagePreview, [imageData.key]: imageData.value });
        } else {
            reader.readAsDataURL(imageData.value);
        }
    };

    useEffect(() => {
        if (data?.image !== '' && data?.image !== 'remove' && data?.image !== null) {
            handleImageLoading({ key: 'image', value: data?.image }, setData);
        }
        if (formData?.father !== '' && formData?.father !== 'remove' && formData?.father !== null) {
            handleImageLoading({ key: 'father', value: formData?.father }, setFormData);
        }
        if (formData?.mother !== '' && formData?.mother !== 'remove' && formData?.mother !== null) {
            handleImageLoading({ key: 'mother', value: formData?.mother }, setFormData);
        }
        if (formData?.siblings !== '' && formData?.siblings !== 'remove' && formData?.siblings !== null) {
            handleImageLoading({ key: 'siblings', value: formData?.siblings }, setFormData);
        }
        if (formData?.spouse !== '' && formData?.spouse !== 'remove' && formData?.spouse !== null) {
            handleImageLoading({ key: 'spouse', value: formData?.spouse }, setFormData);
        }
        if (formData?.children !== '' && formData?.children !== 'remove' && formData?.children !== null) {
            handleImageLoading({ key: 'children', value: formData?.children }, setFormData);
        }
    }, [data?.image, formData?.father, formData?.mother, formData?.siblings, formData?.spouse, formData?.children]);

    const removeImg = (setDataVel, key) => {
        setDataVel(prevData => ({
            ...prevData,
            [key]: 'remove'
        }));
        setImagePreview({ ...imagePreview, [key]: null });
    };

    return (
        <>
            <Layout>
                <div className="max-w-[1024px] mx-auto px-4 my-20">
                    <div className='mb-8'>
                        <div className='underline text-[25px] font-bold text-center'>Person Name Biography, Age, <br /> Boyfriend, Husband And Family</div>
                    </div>
                    <div className='flex justify-center mb-4'>
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Business">Business</option>
                            <option value="Film_Industry">Film Industry</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                        <div className='flex justify-center md:justify-end'>
                            {!imagePreview?.image ?
                                <div className='fileDragArea'>
                                    <input type="file" accept="image/*" onChange={(e) => setData({
                                        ...data,
                                        image: e?.target?.files[0]
                                    })} />
                                    <div className='iconDiv'><ImageIcon sx={{ fontSize: '45px' }} /></div>
                                    <div className='fileupTxt'>Drag & Drop to upload image</div>
                                </div>
                                :
                                <div className='fileDragArea'>
                                    <div className='imgPrevOuter'>
                                        <img src={imagePreview?.image} alt="Image Preview" />
                                        <div className='imgRemove' onClick={() => removeImg(setData, 'image')}>
                                            <CloseIcon />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <img src="/assets/images/person.jpeg" alt="" className='w-full max-w-[370px] object-cover' /> */}
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col bg-[#FFF0F9]'>
                                <div className='first_div flex justify-center py-1 rounded-lg'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='second_div p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className="font-bold text-[15px]">Name</span>
                                        <input type="text" name="name" value={data.name} onChange={handleChange} className="text-[15px] border border-black border border-black" />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Profession</span>
                                        <input type="text" name="profession" value={data.profession} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Age</span>
                                        <input type="text" name="age" value={data.age} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Maritial Status</span>
                                        <input type="text" name="maritalStatus" value={data.maritalStatus} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Nationality</span>
                                        <input type="text" name="nationality" value={data.nationality} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Hometown</span>
                                        <input type="text" name="hometown" value={data.hometown} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                                <div className='third_div flex justify-center mt-auto py-2'>
                                    <img className='mr-3' width="29" height="29" src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                    <img className='mr-3' width="29" height="29" src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" />
                                    <img className='mr-3' width="29" height="29" src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Full Name</span>
                                        <input type="text" name="full_Name" value={formData.full_Name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Nick names</span>
                                        <input type="text" name="nick_names" value={formData.nick_names} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Height</span>
                                        <input type="text" name="height" value={formData.height} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Weight</span>
                                        <input type="text" name="weight" value={formData.weight} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Body Measurements</span>
                                        <input type="text" name="body_measurements" value={formData.body_measurements} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Eye color</span>
                                        <input type="text" name="eye_color" value={formData.eye_color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hair color</span>
                                        <input type="text" name="hair_color" value={formData.hair_color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>DOB</span>
                                        <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Zodiac Sign</span>
                                        <input type="text" name="zodiac_sign" value={formData.zodiac_sign} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Food habit</span>
                                        <input type="text" name="food_habit" value={formData.food_habit} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Present address</span>
                                        <input type="text" name="present_address" value={formData.present_address} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Religion</span>
                                        <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Signature</span>
                                        <input type="text" name="signature" value={formData.signature} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div>
                                <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Education</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>School</span>
                                            <input type="text" name="school" value={formData.school} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>College</span>
                                            <input type="text" name="college" value={formData.college} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational Status</span>
                                            <input type="text" name="educational_status" value={formData.educational_status} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational awards</span>
                                            <input type="text" name="educational_awards" value={formData.educational_awards} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Total Income</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Salary</span>
                                            <input type="text" name="salary" value={formData.salary} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Net Worth</span>
                                            <input type="text" name="net_Worth" value={formData.net_Worth} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Collections</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Cars</span>
                                            <input type="text" name="cars" value={formData.cars} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-4">
                                            <span className='text-[15px]'>Watches</span>
                                            <input type="text" name="watches" value={formData.watches} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            <div className='w-full max-w-[370px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Career Statistics</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3 pb-10'>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Passion behind</span>
                                        <input type="text" name="passion_behind" value={formData.passion_behind} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>debut/First Business</span>
                                        <input type="text" name="debut_first_business" value={formData.debut_first_business} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Turning point</span>
                                        <input type="text" name="turning_point" value={formData.turning_point} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>1st Success</span>
                                        <input type="text" name="first_Success" value={formData.first_Success} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Awards & Achievements</span>
                                        <input type="text" name="awards_Achievements" value={formData.awards_Achievements} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Favourites</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Food</span>
                                        <input type="text" name="food" value={formData.food} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Actor/Actress</span>
                                        <input type="text" name="actor_actress" value={formData.actor_actress} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Musicians</span>
                                        <input type="text" name="musicians" value={formData.musicians} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Singers</span>
                                        <input type="text" name="singers" value={formData.singers} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Songs</span>
                                        <input type="text" name="songs" value={formData.songs} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Books</span>
                                        <input type="text" name="books" value={formData.books} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hobbies</span>
                                        <input type="text" name="hobbies" value={formData.hobbies} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Films</span>
                                        <input type="text" name="films" value={formData.films} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Color</span>
                                        <input type="text" name="color" value={formData.color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Perfume</span>
                                        <input type="text" name="perfume" value={formData.perfume} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Holiday destinations</span>
                                        <input type="text" name="holiday_destinations" value={formData.holiday_destinations} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center md:justify-center'>
                        <div className='w-full max-w-[770px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                            <div className='first_div flex justify-center py-1 rounded'>
                                <span className='text-white'>Family</span>
                            </div>
                            <div className='bg-[#FFF9EA] p-3 pb-10 px-6'>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Father</span>
                                        {!imagePreview?.father ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    father: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.father} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'father')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Mother</span>
                                        {!imagePreview?.mother ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    mother: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.mother} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'mother')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Siblings/Cousins</span>
                                        {!imagePreview?.siblings ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    siblings: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.siblings} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'siblings')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>husband/Wife/Spouse</span>
                                        {!imagePreview?.spouse ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    spouse: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.spouse} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'spouse')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Children</span>
                                        {!imagePreview?.children ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    children: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.children} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'children')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex justify-left'>
                        <div className='flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                            <div className='first_div flex justify-center py-1 rounded'>
                                <span className='text-white'>Refrences</span>
                            </div>
                            <div className='bg-[#FFF9EA] p-3 px-6'>
                                <div className=''>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Cars</span>
                                        <input type="text" name="cars" value={formData.cars} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Watches</span>
                                        <input type="text" name="watches" value={formData.watches} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <button onClick={createCategory}>
                        Create
                    </button>
                </div>
            </Layout>
        </>
    )
}

export default Admin_profile_description