import React from 'react'
import { IoArrowUpSharp } from "react-icons/io5";
import Button from '../Components/Button';
import arrow from "../assets/arrow.svg";


const Testimonials = () => {
  return (
    <div>
        <section className='bg-[#202020] realtive'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4'>
                            <h1 className="text-[76px] leading-[0.9]  text-secondary  font-medium uppercase ">
                                <div className=''>
                                    <span className="block">latest</span>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal lowercase'>I love my work and every projects is my pride  </p>
                                </div>
                                <span className="block ml-25">news</span>
                            </h1>
                            <ul className='font-normal text-[22px] text-secondary/50 mt-32.5 mb-18 uppercase'>
                                <li className='flex items-center justify-between border-y border-secondary/30 py-2 pl-6 '>BERLING agency website <IoArrowUpSharp />
                                </li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>How to design well?</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Lemon Illustration design</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Paul theme Branding</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Best typography 2020</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>my name is pattison</li>
                            </ul>
                            <div className='  mt-25 ml-60'>
                                <Button text="View all works"><img src={arrow} alt="" /></Button>
                            </div>
                        </div>
                        <div className='col-span-8 border-l border-secondary/30'>
                            <div className='text-[15px] font-normal text-secondary flex justify-between pt-7.5 ml-10'>
                                <p>3th January, 2020</p>
                                <p className='w-94.25'>Berling ® —  minimalism photography agency website. with the help of a  minimalistic design, the site turned out to be very  user-friendly  and responsive, and the brand became more.</p>
                                <h5 className='text-[40px] font-medium'>(01)</h5>
                            </div>
                            <div className=" flex justify-center items-center pt-13 pl-10 pr-10 ">
                                <div className="w-full h-200 bg-[#C4C4C4]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-0 -left-13 uppercase">from the blog</h2>
                    <h3 className=" rotate-270 absolute top-40 left-13">5.0</h3>
                </div>
            </section>
    </div>
  )
}

export default Testimonials
