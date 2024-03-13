import React from 'react'
import Layout from '../src/layouts/Layout'

const profile_description = () => {
    return (
        <>
            <Layout>
                <div className="max-w-[1024px] mx-auto px-4 my-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                        <div className='flex justify-center md:justify-end'>
                            <img src="/assets/images/person.jpeg" alt="" className='w-full max-w-[325px]' />
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[325px] flex flex-col bg-[#FFF0F9]'>
                                <div className='first_div flex justify-center py-1 rounded-lg'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='second_div p-3'>
                                    <div className="grid grid-cols-2 mb-2">
                                        <span>Name</span>
                                        <span>abc abc</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-2">
                                        <span>Name</span>
                                        <span>abc abc</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-2">
                                        <span>Name</span>
                                        <span>abc abc</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-2">
                                        <span>Name</span>
                                        <span>abc abc</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-2">
                                        <span>Name</span>
                                        <span>abc abc</span>
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
                </div>
            </Layout>
        </>
    )
}

export default profile_description