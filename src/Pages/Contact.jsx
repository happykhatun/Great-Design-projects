import React from 'react'
import { IoArrowUpSharp } from "react-icons/io5";
import Button from '../Components/Button';
import arrow from "../assets/arrow.svg";

const Contact = () => {
    return (
        <div>
            <section className='bg-[#202020] realtive'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4'>
                            <h1 className="  text-[76px] leading-[0.9]  text-secondary  font-medium uppercase ">
                                <div className='flex gap-20'>
                                    <span className="block">Hire </span>
                                    <span className="block"> me</span>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal lowercase'>Enjoy coffe with me </p>
                                </div>
                            </h1>
                            <ul className='font-normal text-[22px] text-secondary/50 mt-70 mb-18 uppercase'>
                                <li className=' border-y border-secondary/30 py-2 pl-6'> mail: 000.lunchbox@gmail.com</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>skype: murren8</li>
                                <li className='flex items-center justify-between border-y border-secondary/30 py-2 pl-6 '>www.behance.net/Paulggooo <IoArrowUpSharp />
                                </li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>telegram: Paul_inc</li>
                            </ul>
                            <p className='text-secondary font-normal text-[15px] mt-50'>© Pattison 2021.  All Rights Resevered</p>
                        </div>
                        <div className='col-span-8 border-l border-secondary/30'>
                            <div className='text-[40px] font-medium text-secondary  pt-7.5 ml-10 w-128.5'>
                                <h2>Let's grab a coffee and jump on <span className='text-primary'>conversation</span> chat with me.</h2>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='ml-10 '>
                                    <a className='text-secondary text-[18px] font-normal uppercase' href="">send a brief</a>
                                    <p className='text-secondary text-[15px] font-normal w-80.25 mt-6'>I recommend filling out a brief to assess the cost of the project. <span className='text-primary'>Brief</span> </p>
                                </div>
                                <div className='text-secondary/50 text-[18px] font-normal mt-10'>
                                    <input type="text" placeholder='Name' className='border-b block pb-3' />
                                    <input type="text" placeholder='EMAIL *' className='border-b block pb-3 my-16' />
                                    <input type="text" placeholder='MESSAGE *' className='border-b pb-3' />
                                    <div className='mt-17 mb-50'>
                                        <Button><img src={arrow} alt="" /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-0 -left-13 uppercase">contact</h2>
                    <h3 className=" rotate-270 absolute top-40 left-13">6.0</h3>
                </div>
            </section>
        </div>
    )
}

export default Contact
