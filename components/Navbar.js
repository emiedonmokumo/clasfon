'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>{
    const [showNav, setShowNav] = useState(false)
    const navFunc = (e) =>{
        setShowNav(!showNav)
    }
    return (
        <header className="text-white" style={{backgroundColor: "transparent"}}>
           <div className="container">
               <div className="flex flex-row justify-end md:hidden">
                   <div className="flex flex-row"> 
                       <p className="font-bold text-white mx-4">TITHE & DONATIONS</p>
                       <p className="font-bold text-white mx-4">SUBMIT REPORT</p>
                   </div>
                   <div className="flex flex-row">
                       <p className="mx-3">|</p>
                       <p><i className="bi bi-instagram mx-2 hover:bg-darkRed text-white p-2" style={{borderRadius: '20px', width:'100%'}}></i></p>
                       <p><i className="bi bi-twitter mx-2 hover:bg-darkRed text-white p-2" style={{borderRadius: '20px', width:'100%'}}></i></p>                      
                       <p><i className="bi bi-facebook mx-2 hover:bg-darkRed text-white p-2" style={{borderRadius: '20px', width:'100%'}}></i></p>                   
                    </div>
               </div>
                <div className="flex flex-row justify-between" style={{alignItems: 'base'}}>
                    <div>
                        <img src="/assets/logo-3.png" alt="" style={{width:'55px'}}/>
                    </div>
                    <div className="flex flex-col">
                        <button className="lg:hidden navBar md:flex md:flex-col" onClick={navFunc}>
                            <span className="bg-white"></span>
                            <span className="bg-white"></span>
                            <span className="bg-white"></span>
                        </button>
                        <div>
                        <ul className="flex flex-row md:hidden sm:hidden">
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
                {showNav && ( 
                <ul className="sm:text-sm bg-dark m-2 text-white transition duration-700 ease-in-out flex flex-row md:flex-col lg:hidden">
                    <li className="lg:mx-2 hover:bg-darkRed p-1"><Link href="/">Home</Link></li>
                    <li className="lg:mx-2 hover:bg-darkRed p-1 my-2"><Link href="/aboutus">About us</Link></li>
                    <li className="lg:mx-2 hover:bg-darkRed p-1"><Link href="/getinvolved">Get Involved</Link></li>
                    <li className="lg:mx-2 hover:bg-darkRed p-1 my-2">Gallery</li>
                    <li className="lg:mx-2 hover:bg-darkRed p-1">Contact us</li>
                    <li className="lg:mx-2 hover:bg-darkRed p-1 my-2">Conference</li>
                </ul>
                )}
           </div>
        </header>
    )
};

export default Navbar;