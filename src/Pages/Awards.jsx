import React from 'react'
import arrow from "../assets/arrow.svg";
import Button from '../Components/Button';

const Awards = () => {
    return (
        <div>
            <section className='bg-[#202020] realtive'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4 pt-7.5 -ml-10'>
                            <div>
                                <h1 className="text-[76px] leading-[0.9]  text-secondary  font-medium uppercase ">
                                    <div className='flex gap-25'>
                                        <span className="block">Explore</span>
                                        <span className=''>my</span>
                                    </div>
                                    <div>
                                        <p className='text-[15px] font-normal lowercase'>I love my work and every projects is my pride  </p>
                                    </div>
                                    <span className="block ml-25">profile</span>
                                </h1>
                                <p className='text-[15px] font-normal text-secondary mt-12'>Hello, my name is Pavel Suslov and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
                            </div>

                            <div className='  mt-25 ml-60'>
                                <Button text="View all works"><img src={arrow} alt="" /></Button>
                            </div>
                        </div>
                        <div className='col-span-8 border-l border-secondary/30'>
                            <h1 className='font-medium text-secondary text-[40px] ml-8 pt-7.5 text-nowrap'>Professional <span className='text-primary'>awards</span></h1>
                            <div className="grid grid-cols-12 items-center gap-10 border-b border-secondary/30 px-8 py-10">
                                <div className="col-span-2">
                                    <div className="w-21 h-21 bg-secondary"></div>
                                </div>
                                <div className="col-span-4">
                                    <h3 className="text-secondary text-[22px] uppercase ">
                                        1ST WINNER CREATIVE DESIGN CHAMPIONSHIP
                                    </h3>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-secondary text-[15px] ">
                                        For most favorited design voted by NY City Style <br /> customers
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 items-center gap-10 border-b border-secondary/30 px-8 py-10">
                                <div className="col-span-2">
                                    <div className="w-21 h-21 bg-secondary"></div>
                                </div>
                                <div className="col-span-4">
                                    <h3 className="text-secondary text-[22px] uppercase ">
                                       BEST 5 BRANDING PROJECT OF NOMINATIONS
                                    </h3>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-secondary text-[15px] ">
                                        For best creative & usable health care mobile app <br /> design
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 items-center gap-10 border-b border-secondary/30 px-8 py-10">
                                <div className="col-span-2">
                                    <div className="w-21 h-21 bg-secondary"></div>
                                </div>
                                <div className="col-span-4">
                                    <h3 className="text-secondary text-[22px] uppercase ">
                                       8 Years of Membership
                                    </h3>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-secondary text-[15px] ">
                                        Has been part of the Envato Community for over 8 years
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 items-center gap-10 border-b border-secondary/30 px-8 py-10">
                                <div className="col-span-2">
                                    <div className="w-21 h-21 bg-secondary"></div>
                                </div>
                                <div className="col-span-4">
                                    <h3 className="text-secondary text-[22px] uppercase ">
                                        Exclusive Author
                                    </h3>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-secondary text-[15px] ">
                                       Sells items exclusively on Envato Market
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-50 -left-15">my awwards</h2>
                    <h3 className=" rotate-270 absolute top-40 left-13">3.0</h3>
                </div>
            </section>
        </div>
    )
}

export default Awards
