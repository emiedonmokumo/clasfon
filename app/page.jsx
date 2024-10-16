import Link from "next/link";
import SlideShow from "@/components/SlideShow";
import { FaGlobe, FaNetworkWired, FaUsers } from "react-icons/fa";

export default function page() {
    return (
        <div>
            <SlideShow />
            <div className="bg-milk">
                <div className="lg:py-12 sm:py-10 p-5 flex flex-row sm:flex-col justify-between items-center">
                    <div className="">
                        <p className="font-bold text-3xl sm:text-xl sm:pb-5">Are you a lawyer?</p>
                        <div className="flex flex-row sm:flex-col">
                            <h1 className="font-bold">Join us in sharing the gospel of Jesus.</h1>
                            <h1 className="sm:py-5"><i>You belong here</i></h1>
                        </div>
                    </div>
                    <div className="my-5">
                        <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] rounded-3xl p-3 px-5 text-white font-medium">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-col justify-between py-16 my-5 overflow-hidden items-center">
                <div className="flex-shrink-0 sm:hidden">
                    <div className="relative h-64">
                        <div className="absolute -left-20 top-0 w-60 h-60 p-2 shadow-2xl rotate-45 overflow-hidden bg-white z-10">
                            <img src="/assets/prayer.png" />
                        </div>
                        <div className="absolute bottom-0 p-2 left-16 w-32 h-32 rotate-45 overflow-hidden z-10">
                            <img src="assets/law.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center mx-2 lg:px-64 sm:p-5 relative z-20">
                    <div className="">
                        <div className="leading-8">
                            <h2 className='font-playfair mb-5 font-bold text-2xl'>A fellowship of lawyers who believe in Jesus as Savior and Lord</h2>
                            <p className='sintony'>We understand and believe that the practice of law is a calling from God. Hence, it our responsibility to work with others to prusue what justice requires in a free and democratic society. We exist as a fellowship because of a collective imagination about the work of a Christian lawyer and a shared sense of responsibility for the communication of the gospel in and through the legal profession</p><br />
                        </div>
                        <div className="mt-5">
                            <a href="" className='text-white bg-darkRed p-5 hover:bg-lightRed' >LEARN MORE</a>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 relative sm:hidden">
                    <div className="relative h-64">
                        <div className="absolute -right-20 top-0 w-60 h-60 p-2 shadow-2xl rotate-45 overflow-hidden bg-white z-10">
                            <img src="/assets/prayer.png" />
                        </div>
                        <div className="absolute bottom-0 p-2 right-16 w-32 h-32 rotate-45 overflow-hidden z-10">
                            <img src="/assets/prayer3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 mx-auto bg-dark text-white">
                <div className="m-2">
                    <div className="flex flex-row sm:flex-col justify-between px-32 space-x-5 items-center">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaUsers className="text-3xl text-lightRed" />
                            <h1 className="text-4xl">600+</h1>
                            <h4 className="text-2xl">Members</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2 sm:my-8">
                            <FaNetworkWired className="text-3xl text-lightRed" />
                            <h1 className="text-4xl">50+</h1>
                            <h4 className="text-2xl">Branches</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <FaGlobe className="text-3xl text-lightRed" />
                            <h1 className="text-4xl">6</h1>
                            <h4 className="text-2xl">Regions</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:p-10 sm:p-3 my-12">
                <div className="flex sm:flex-col">
                    <div className="shadow-xl lg:mr-5">
                        <a href="">
                            <img src="/assets/conference.jpg" alt="" style={{ width: '100%' }} />
                        </a>
                        <div className="p-8">
                            <ul className="flex list-none">
                                <li>2-6 August 2023</li>
                                <li className="mx-2"></li>
                                <li>Port Harcourt</li>
                            </ul>
                            <div className="my-5">
                                <h4 className="font-bold text-2xl">CLASFON CONFERENCE 2023</h4>
                                <p>We are excited to announce that the 2023 National Conference will take place August 2–6 in Port-Harcourt, Nigeria. Learn more and register now ...</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-5 sm:mt-10">
                        <div className="flex">
                            <div className="flex flex-col p-5 text-white bg-lightRed">
                                <span>Mar.</span>
                                <span className='text-3xl font-bold'>09</span>
                                <span>2023</span>
                            </div>
                            <div className="mx-5">
                                <ul className="flex flex-row list-none">
                                    <li className='font-semibold'>5:00PM</li>
                                    <li className="mx-5"></li>
                                    <li className='font-semibold'>Fully Virtual</li>
                                </ul>
                                <h4 className="font-bold my-3">1st Quarter President-In-Council</h4>
                                <p>Periodically, we gather across regions to discuss and plan for the soul and well-being of the fellowship's members.</p>
                            </div>
                        </div>
                        <div className="flex flex-row my-12">
                            <div className="flex flex-col p-5 text-white bg-lightRed">
                                <span>June</span>
                                <span className='text-3xl font-bold'>08</span>
                                <span>2023</span>
                            </div>
                            <div className="mx-5">
                                <ul className="flex flex-row list-none">
                                    <li className='font-semibold'>5:00PM</li>
                                    <li className="mx-5"></li>
                                    <li className='font-semibold'>Fully Virtual</li>
                                </ul>
                                <h4 className="font-bold my-3">1st Quarter President-In-Council</h4>
                                <p>Periodically, we gather across regions to discuss and plan for the soul and well-being of the fellowship's members.</p>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                            <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] rounded-3xl p-3 px-5 text-white font-medium">Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="lg:px-12 flex flex-row text-center sm:flex-col sm:space-y-4">
                    <div className="p-10 bg-[#22252a] text-white lg:mx-4">
                        <h3 className="text-3xl font-bold">Get Involved</h3>
                        <p className="py-5 text-sm leading-7">We are dedicated to serving Jesus Christ through the practice and study of law, the defense of religious freedom and life, and the provision of legal aid to the needy. Join us and let's accomplish this together.</p>
                        <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] rounded-3xl p-3 px-5 text-white font-medium">Get Involved</Link>
                    </div>
                    <div className="p-10 bg-[#22252a] text-white lg:mx-4">
                        <h3 className="text-3xl font-bold">Find A Branch</h3>
                        <p className="py-5 text-sm leading-7">There are over 60 CLASFON branches and university fellowships in Nigeria. Browse a list of branches in your local area and across the country, and connect with them through our online directory.</p>
                        <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] rounded-3xl p-3 px-5 text-white font-medium">View Directory</Link>
                    </div>
                </div>
            </div>
            <div className="my-12 mt-20 py-5" style={{ backgroundImage: 'url("/assets/testimonial-bg-1.jpg")' }}>
                <div className="">
                    <div className="block text-center p-5 my-8 space-y-3">
                        <h2 className="text-3xl font-bold m-5">Anthem</h2>
                        <p className="m-5 leading-8">"Keep ye judgment and do justice, God’s salvation now has come, People fall prey to injustice, <br /> Rise to give them all Succor, Our revealing is awaited, A world of difference to make,<br /> Here we are Lord, to advocate, May your will be done through us."</p>
                    </div>
                </div>
            </div>
            <div className="lg:p-5 sm:p-2 sm:my-12">
                <div className="lg:mb-40">
                    <h1 className="text-2xl font-bold">Communications</h1>
                    <div className="flex flex-row sm:flex-col sm:space-y-32 text-sm sm:mt-2">
                        <div className="relative lg:m-3">
                            <img src="/assets/blog1.jpg" alt="" className="" />
                            <div className="lg:mx-5 sm:mx-2 shadow-2xl bg-white p-5 px-8 absolute top-24 leading-8">
                                <h3 className="text-1xl font-bold sm:text-sm">Presidents' Report August 2021</h3>
                                <p>CLASFON Presidents' report presented at the annual general meeting of the christain lawyers fellowship of Nigeria at SFI Convention.</p>
                            </div>
                        </div>
                        <div className="relative lg:m-3">
                            <img src="/assets/blog2.jpg" alt="" className="" />
                            <div className="lg:mx-5 sm:mx-2 shadow-2xl bg-white p-5 px-8 absolute top-24 leading-8">
                                <h3 className="text-1xl font-bold sm:text-sm">Communiquè November 2022</h3>
                                <p>Communiquè issued at the end of the president-in-council meeting of CLASFON held November 10-12, 2022 in Lagos.</p>
                            </div>
                        </div>
                        <div className="relative lg:m-3">
                            <img src="/assets/blog3.jpg" alt="" className="" />
                            <div className="lg:mx-5 sm:mx-2 shadow-2xl bg-white p-5 px-8 absolute top-24 leading-8">
                                <h3 className="text-1xl font-bold sm:text-sm">Presidents' Report August 2022</h3>
                                <p>CLASFON Presidents' report presented at the annual general meeting of the christain lawyers fellowship of Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 sm:my-28 flex justify-between items-center sm:flex-col">
                <h1 className="text-3xl font-semibold sm:text-xl">Become a CLASFON member. <i>Today!</i></h1>
                <Link href={'#'} className="lg:p-5 md:p-3 bg-darkRed rounded-3xl text-white hover:bg-lightRed lg:font-semibold">Register Now</Link>
            </div>
        </div>
    )
}