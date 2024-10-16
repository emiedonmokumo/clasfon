'use client'
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const navFunc = (e) => {
        setShowNav(!showNav)
    }
    return (
        <nav className="lg:py-5 text-sm absolute top-0 left-0 w-full z-10 bg-transparent text-white">
            <div className="sm:hidden">
                <div className="flex flex-row justify-end items-center">
                    <div className="flex flex-row">
                        <p className="font-bold  mx-4">TITHE & DONATIONS</p>
                        <p className="font-bold  mx-4">SUBMIT REPORT</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="mx-3">|</p>
                        <Link href={'#'}><FaInstagram className="text-darkRed font-light" /></Link>
                        <Link href={'#'} className="mx-2"><FaTwitter className="text-darkRed font-light" /></Link>
                        <Link href={'#'}><FaFacebook className="text-darkRed font-light mr-2" /></Link>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center" style={{ alignItems: 'base' }}>
                    <img src="/assets/logo-3.png" alt="" style={{ width: '55px' }} />
                    <div className="flex flex-col">
                        <button className="" onClick={navFunc}>
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                        </button>
                        <div>
                            <ul className="flex flex-row">
                                <li className="lg:mx-2"><Link href="/">Home</Link></li>
                                <li className="lg:mx-2"><Link href="/aboutus">About us</Link></li>
                                <li className="lg:mx-2"><Link href="/getinvolved">Get Involved</Link></li>
                                <li className="lg:mx-2">Gallery</li>
                                <li className="lg:mx-2">Contact us</li>
                                <li className="lg:mx-2">Conference</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* {showNav && (
                    <ul className="sm:text-sm bg-dark m-2  transition duration-700 ease-in-out flex flex-row md:flex-col lg:hidden">
                        <li className="lg:mx-2 hover:bg-darkRed p-1"><Link href="/">Home</Link></li>
                        <li className="lg:mx-2 hover:bg-darkRed p-1 my-2"><Link href="/aboutus">About us</Link></li>
                        <li className="lg:mx-2 hover:bg-darkRed p-1"><Link href="/getinvolved">Get Involved</Link></li>
                        <li className="lg:mx-2 hover:bg-darkRed p-1 my-2">Gallery</li>
                        <li className="lg:mx-2 hover:bg-darkRed p-1">Contact us</li>
                        <li className="lg:mx-2 hover:bg-darkRed p-1 my-2">Conference</li>
                    </ul>
                )} */}
            </div>
        </nav>
    )
};

export default Navbar;