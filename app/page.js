import Link from "next/link";
import SlideShow from "@/components/SlideShow";
// import Button from "./Button";
// import Polygon from "./Polygon";
// import BranchRow from "./BranchRow";
// import UpcomingEvent from "./UpcomingEvent";
// import GetInvolved from "./Home/GetInvolved";
// import Anthem from "./Anthem";

export default function page() {
    return (
        <div>
            <SlideShow />
            <div className="bg-milk">
                <div className="lg:py-12 sm:py-8 p-5 flex flex-row justify-between items-center">
                    <div >
                        <p className="font-bold">Are you a lawyer?</p>
                        <div className="flex flex-row">
                            <h1 className="font-bold text-3xl">Join us in sharing the gospel of Jesus.</h1>
                            <h1 className="text-3xl"><i>You belong here</i></h1>
                        </div>
                    </div>
                    <div className="my-5">
                        <Link href={'#'} className="bg-[#96000C] hover:bg-[#b40a18] rounded-3xl p-3 px-5 text-white font-medium">Learn More</Link>
                    </div>
                </div>
            </div>
            {/* <div className="flex section-no-border" style={{ position: 'relative', padding: '70px 0 160px', overflow: 'hidden' }}>
                <img className='custom-cloud sm:hidden' src="/assets/left-cloud.png" alt="" />
                <div className='polygon left-pos sm:hidden md:hidden'></div>
                <div className='polygon-sm left-pos sm:hidden md:hidden'></div>
                <img src="/assets/right-cloud.png" alt="" className="custom-cloud right-pos sm:hidden" />
                <div className='polygon right-pos sm:hidden md:hidden'></div>
                <div className='polygon-sm right-pos sm:hidden md:hidden' style={{ backgroundImage: 'url(/assets/prayer3.jpg)'}}></div>
                <div className='row justify-content-center text-center'>
                    <div className='' style={{ position: 'relative', maxWidth: '720px' }}>
                        
                    </div>
                </div>
            </div> */}
            <div>
                <div className="relative w-32 h-32 bg-center bg-no-repeat bg-contain transform rotate-45 overflow-hidden" style={{ backgroundImage: 'url(/assets/prayer3.jpg)' }}></div>
                <div className="relative w-32 h-32 bg-center bg-no-repeat bg-contain transform rotate-45 overflow-hidden" style={{ backgroundImage: 'url(/assets/prayer3.jpg)' }}></div>
            </div>
            <div className="">
                <div className="leading-8">
                    <h2 className='play-fair'>A fellowship of lawyers who believe in Jesus as Savior and Lord</h2>
                    <p className='sintony'>We understand and believe that the practice of law is a calling from God. Hence, it our responsibility to work with others to prusue what justice requires in a free and democratic society. We exist as a fellowship because of a collective imagination about the work of a Christian lawyer and a shared sense of responsibility for the communication of the gospel in and through the legal profession</p><br />
                </div>
                <div className="mt-5">
                    <a href="" className='text-white bg-darkRed p-5 hover:bg-lightRed' >LEARN MORE</a>
                </div>
            </div>
            {/* <Polygon />
            <BranchRow />
            <UpcomingEvent />
            <GetInvolved />
            <Anthem /> */}

            <div className="container mx-auto p-5">
                <div className="mb-40">
                    <h1 className="text-2xl md:text-xl font-bold">Communications</h1>
                    <div className="flex flex-row md:flex-col sm:flex-col">
                        <div className="relative m-3 md:mb-44">
                            <img src="/assets/blog1.jpg" alt="" className="" />
                            <div className="mx-5 shadow-2xl bg-white p-5 px-8 absolute top-24 md:p-3">
                                <h3 className="text-1xl font-bold sm:text-sm">Presidents' Report August 2021</h3>
                                <p>CLASFON Presidents' report presented at the annual general meeting of the christain lawyers fellowship of Nigeria at SFI Convention.</p>
                            </div>
                        </div>
                        <div className="relative m-3 md:mb-44">
                            <img src="/assets/blog2.jpg" alt="" className="" />
                            <div className="mx-5 shadow-2xl bg-white p-5 px-8 absolute top-24">
                                <h3 className="text-1xl font-bold sm:text-sm">Communiquè November 2022</h3>
                                <p>Communiquè issued at the end of the president-in-council meeting of CLASFON held November 10-12, 2022 in Lagos.</p>
                            </div>
                        </div>
                        <div className="relative m-3 md:mb-16">
                            <img src="/assets/blog3.jpg" alt="" className="" />
                            <div className="mx-5 shadow-2xl bg-white p-5 px-8 absolute top-24">
                                <h3 className="text-1xl font-bold sm:text-sm">Presidents' Report August 2022</h3>
                                <p>CLASFON Presidents' report presented at the annual general meeting of the christain lawyers fellowship of Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-5 flex justify-between items-center sm:flex-col">
                <h1 className="text-3xl font-semibold sm:text-xl">Become a CLASFON member. <i>Today!</i></h1>
                <Link href={'#'} className="lg:p-5 md:p-3 bg-darkRed rounded-3xl text-white hover:bg-lightRed lg:font-semibold">Register Now</Link>
            </div>
        </div>
    )
}