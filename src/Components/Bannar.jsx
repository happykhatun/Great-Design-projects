import React from 'react'
import Button from './Button'
import arrow from "../assets/arrow.svg";
import Counter from './Counter';
import bannar from '../assets/bannar.png';



const Bannar = () => {
    return (
        <>
            <section className='bg-[#202020] '>
                <div className="container">
                    <div className='flex'>
                        <div>
                            <h1 className="text-[76px] leading-[0.9]  text-secondary  font-medium ">
                                <div className='flex gap-25'>
                                    <span className="block">GET</span>
                                    <span className=''>YOUR</span>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal'>Always available for freelance work, contact me and get your greate design </p>
                                </div>
                                <span className="block">GREAT</span>
                                <span className="block ml-18">DESIGN</span>
                            </h1>
                            <p className='text-[15px] font-normal text-secondary mt-12 w-95'>Hello, my name is Pattison and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
                            <div className='flex gap-5 items-center mt-25 ml-50'>
                                <span className='text-[15px] font-normal text-secondary'>(hire me)</span>
                                <div>
                                    <Button><img src={arrow} alt="" /></Button>
                                </div>
                            </div>
                            <Counter />
                        </div>
                        <div className='relative'>
                            <img src={bannar} alt="" />
                            <div className='flex '>
                                <div className='w-120 h-120 rounded-full bg-secondary absolute top-50 left-8'>
                                </div>
                                <div className='w-120 h-120 rounded-full bg-[#131313]/70 absolute top-50 right-22'>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Bannar
