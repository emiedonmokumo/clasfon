import React from 'react'
import executives from '../../executives.json'
import Navbar from '@/components/Navbar'
import { FaClock, FaGlobe, FaNetworkWired, FaUsers } from 'react-icons/fa'

const page = () => {
    return (
        <div>
            <div className='bg-milk'>
                <div className="h-96 flex justify-center items-center" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/aboutus.jpg)`, borderRadius: '0 0 50% 50%' }}>
                    <div className="lg:px-16 py-5">
                        <Navbar />
                        <div className="py-8 text-center text-white">
                            <p className="text-white sm:text-sm sm:mb-3">Christian Lawyer's Fellowship of Nigeria</p>
                            <h1 className="text-6xl font-bold play-fair sm:text-3xl">About us</h1>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto text-dark p-3">
                    <div className="m-3">
                        <div className="flex flex-row justify-evenly sm:flex-col">
                            <div className="flex flex-col justify-center items-center space-y-3">
                                <FaClock className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">42</h1>
                                <h4 className="text-2xl sm:text-xl">Years</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 my-3">
                                <FaUsers className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">2,000+</h1>
                                <h4 className="text-2xl sm:text-xl">Members</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3">
                                <FaGlobe className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">50+</h1>
                                <h4 className="text-2xl sm:text-xl">Branches</h4>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 my-3">
                                <FaNetworkWired className="text-3xl text-lightRed" />
                                <h1 className="text-4xl sm:text-2xl">5</h1>
                                <h4 className="text-2xl sm:text-xl">Regions</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-12 p-10 space-x-16'>
                <div className='text-justify font-playfair'>
                    <h2 className='text-3xl font-bold pb-5'>Our History</h2>
                    <p className='leading-7'>CLASFON had earlier began with 11 Christian Law Students at the Law School in 1979. CLASFON at the Students level officially began in 1991 and is currently in her 32nd anniversary. The CLASFON National Students Annual Conference which began in 1992 has successfully held 30 editions with the 31st edition to be held at the Obafemi Awolowo University, Ile Ife from the 6-10th of September this year (2023).
                        Christian Students in accredited Law faculties of Nigerian Universities are considered Associate members of the fellowship. For purpose of administrative efficiency among the students, a BYE LAW has been produced to guide the operations of the Students arm of the Fellowship. This Bye law is subject to the provisions of the Constitution of CLASFON.
                        The National Field Representative (NFR) oversees the Students Ministry of the Fellowship. He does this by collaborating with the National Executive Director (NED) under the supervision of the National Assistant Secretary (ANS) who is mandated by the AGM and CLASFON Constitution to interface with the students on behalf of NEC.
                        At present, there are about 60 chapters of CLASFON in Nigerian Universities and in all the 7 campuses of the Nigerian Law School.
                    </p>
                </div>
                <img src="/assets/about.png" alt="" />
            </div>
            <div className="p-5">
                <h1 className="ml-4 font-bold text-3xl mb-3">CLASFON Executives</h1>
                <div className="flex flex-wrap justify-start">
                    {executives.map((executive, index) => (
                        <div key={index} className="m-5 max-w-64">
                            <img src={executive.img} alt="" className="w-full max-h-30 object-contain" />
                            <h3 className="bg-darkRed text-white p-2 uppercase sm:text-sm">{executive.name}</h3>
                            <h3 className="my-1 bg-milk text-dark p-2 sm:text-sm">{executive.position}</h3>
                            <h3 className="bg-milk text-dark h3 p-2 sm:text-sm">{executive.school}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
