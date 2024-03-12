'use client';
import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import BootstrapDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Layout from '../src/layouts/Layout';

const page = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Layout>
                <React.Fragment>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Contact Us
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <div className="max-w-[1024px] mx-auto px-4 mt-20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-8 gap-14">
                                    <div>
                                        <img src="/assets/images/White And Yellow Colorful Web Designer Instagram Post.webp" alt="" />
                                    </div>
                                    <div>
                                        <form action="#" method="post" className="space-y-6">
                                            <div className="flex space-x-4">
                                                <div className="w-1/2">
                                                    <label htmlFor="email" className="block text-sm font-medium">First Name</label>
                                                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent hover:bg-white focus:bg-white" />
                                                </div>
                                                <div className="w-1/2">
                                                    <label htmlFor="query" className="block text-sm font-medium">Last Name</label>
                                                    <input type="text" id="query" name="query" className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="query" className="block text-sm font-medium">Email *</label>
                                                <input type="text" id="query" name="query" className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                            </div>
                                            <div>
                                                <label htmlFor="prefferedPlan" className="block text-sm font-medium">Preferred Plan *</label>
                                                <select id="preferredPlan" name="preferredPlan" className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                                    <option value="choice1">Choice 1</option>
                                                    <option value="choice2">Choice 2</option>
                                                    <option value="choice3">Choice 3</option>
                                                    <option value="choice4">Choice 4</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white"></textarea>
                                            </div>
                                            <div>
                                                <button type="submit" className="sub_but text-white px-4 py-2 w-full rounded-md transition duration-300 hover:bg-black hover:text-white hover:border-1 hover:border-black focus:outline-none focus:ring focus:border-blue-300">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </BootstrapDialog>
                </React.Fragment>

                <div className='flex'>
                    <div className="max-w-[1024px] mx-auto px-4 mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 p-8">
                            <div className='rounded-lg overflow-hidden mr-7 min-w-[285px]'>
                                <div className='first_half p-7 pt-9'>
                                    <div className='text-[20px]'>Free</div>
                                    <span className='font-semibold text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-[68px]'>0</span>
                                    <div className='text-[12px] mt-6'>Free Plan</div>
                                    <button className="mt-5 bg-black text-white font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-yellow-500 hover:text-black"
                                        onClick={handleClickOpen}>
                                        Get Started
                                    </button>
                                </div>
                                <div className='second_half p-7 pb-16 min-h-[211px]'>
                                    <div className='flex mt-4'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>Free profile on Clestrix </span>
                                    </div>
                                    <div className='flex mt-5'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>3 free edits </span>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-lg overflow-hidden mr-7 min-w-[285px]'>
                                <div className='bg-black p-7 pt-9'>
                                    <div className='text-[20px] text-white'>Standard</div>
                                    <span className='font-semibold text-white text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-white text-[68px]'>4,999</span>
                                    <button className="mt-[62px] bg-white text-black font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-yellow-500 hover:text-black"
                                        onClick={handleClickOpen}>
                                        Get Started
                                    </button>
                                </div>
                                <div className='second_half p-7 pb-16 min-h-[211px]'>
                                    <div className='flex mt-4'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>Personalized Website </span>
                                    </div>
                                    <div className='flex mt-5'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>3 lifetime edits </span>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-lg overflow-hidden mr-7 min-w-[285px]'>
                                <div className='first_half p-7 pt-9'>
                                    <div className='text-[20px]'>Premium</div>
                                    <span className='font-semibold text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-[68px]'>49</span>
                                    <div className='text-[12px]'>Every month</div>
                                    <div className='text-[12px] mt-3'>7 day free trial</div>
                                    <button className="mt-4 bg-black text-white font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-yellow-500 hover:text-black"
                                        onClick={handleClickOpen}>
                                        Start Free Trial
                                    </button>
                                </div>
                                <div className='second_half p-7 pb-16 min-h-[211px]'>
                                    <div className='flex mt-4'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>Free profile on Clestrix </span>
                                    </div>
                                    <div className='flex mt-5'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>Search Engine Optimization</span>
                                    </div>
                                    <div className='flex mt-5'>
                                        <span><svg role="img" width="21" height="21" viewBox="0 0 24 24"><path class="s__7q13bT" fill-rule="evenodd" d="M10.785 14.961L8 12.176L8.707 11.469L10.785 13.547L15.293 9.039L16 9.746L10.785 14.961ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.419 20 20 16.418 20 12C20 7.582 16.419 4 12 4Z"></path></svg></span>
                                        <span className='text-[13px] pl-2'>Lifetime free management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default page