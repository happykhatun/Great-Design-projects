import React from 'react'
import { IoArrowUpSharp } from "react-icons/io5";
import Button from '../Components/Button';
import arrow from "../assets/arrow.svg";
import arrow2 from "../assets/arrow2.svg";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
import testimonial4 from "../assets/testimonial4.png";
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
    return (
        <div>
            <section className='bg-[#202020] realtive'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4 mt-10'>
                            <h1 className="text-[76px] leading-[0.9]  text-secondary  font-medium uppercase ">
                                <div className=''>
                                    <span className="block">+250</span>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal lowercase'>I love my work and every project is my pride  </p>
                                </div>
                                <span className="block ml-40">happy</span>
                                <span className="block ">clients</span>
                            </h1>
                            <div className='flex gap-32 mt-100'>
                                <div className='space-y-25'>
                                    <img src={testimonial1} alt="" />
                                    <img src={testimonial2} alt="" />
                                </div>
                                <div className='space-y-25'>
                                    <img src={testimonial3} alt="" />
                                    <img src={testimonial4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-8 border-l border-secondary/30'>
                            <h2 className='text-[40px] font-medium text-secondary w-lg leading-[120%] mt-10 ml-10'> <span className='text-primary'>Creative</span> & dedicated is things that my studio brings for your business</h2>
                            <div className='flex gap-25 items-center ml-90 mt-70'>
                                <FaQuoteLeft className='text-primary text-[100px]' />
                                <p className='text-[15px] font-normal text-secondary w-95'>“ If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Bauhaus Studio is perfect.</p>
                            </div>
                            <div className='ml-140 mt-10'>
                                <h3 className='text-secondary text-[22px] font-normal uppercase'>david & elisa</h3>
                                <p className='text-secondary text-[15px] font-normal'>Apartment view lake at Brooklyn</p>
                            </div>
                            <div className='mt-25 ml-130 flex'>
                                <Button  className="border-secondary border bg-transparent"><img src={arrow2} alt="" /></Button>
                                 <Button><img src={arrow} alt="" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-0 -left-13 uppercase">testimonials</h2>
                    <h3 className=" rotate-270 absolute top-40 left-13">4.0</h3>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
