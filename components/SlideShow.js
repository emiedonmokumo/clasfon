'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from "./Navbar";
import Link from "next/link";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const SlideShow = () => {
    return (
        <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }} className="mySwiper">
            <SwiperSlide>
                <div className="lg:h-screen flex justify-center items-center" style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/flag.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}>
                    <div className="text-center py-12 sm:px-10">
                        <div className="flex flex-row justify-center items-center">
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                            <p className="text-xl font-bold sm:text-sm sm:px-1 text-white font-playfair">A NEW LEGAL PROFESSION</p>
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                        </div>
                        <div className="play-fair">
                            <h1 className="lg:text-4xl sm:text-2xl font-bold font-playfair text-white">ANCHORED ON CHRIST</h1>
                        </div>
                        <p className="text-white text-lg sm:text-sm font-poppins">Christian Lawyers Fellowship of Nigeria</p>
                        <div className="my-5 sm:text-sm">
                            <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] text-white py-3 px-5 rounded-3xl font-poppins">JOIN US</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="lg:h-screen flex justify-center items-center" style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/classfonhome.jpeg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}>
                    <div className="text-center py-12 sm:px-10">
                        <div className="flex flex-row justify-center items-center">
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                            <p className="text-1xl sm:text-sm sm:px-1 text-white">Welcome home to</p>
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                        </div>
                        <div className="play-fair">
                            <h1 className="lg:text-4xl sm:text-2xl font-extrabold font-playfair text-white">CLASFON</h1>
                        </div>
                        <p className="text-white sm:text-sm">Christian Lawyers Fellowship of Nigeria</p>
                        <div className="my-5 sm:text-sm">
                            <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] text-white py-3 px-5 rounded-3xl font-poppins">Learn More!</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-screen flex justify-center items-center" style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/slide3.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}>
                    <div className="text-center py-12 sm:px-10">
                        <div className="flex flex-row justify-center items-center">
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                            <p className="text-1xl sm:text-sm sm:px-1 text-white font-playfair">NATIONAL CONFERENCE</p>
                            <img src="/assets/slide-title-border.png" alt="" className="w-10" />
                        </div>
                        <div className="play-fair">
                            <h1 className="lg:text-4xl sm:text-2xl font-bold font-playfair text-white">THE LORD OUR LAW GIVER</h1>
                        </div>
                        <p className="text-white sm:text-sm">Christian Lawyers Fellowship of Nigeria</p>
                        <div className="my-5 sm:text-sm">
                            <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] text-white py-3 px-5 rounded-3xl font-poppins">Learn More!</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default SlideShow;