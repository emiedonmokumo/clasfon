import { Link } from "react-router-dom";
import Button from "./Button";
import SlideShow from "./SlideShow";
import Polygon from "./Polygon";
import BranchRow from "./BranchRow";
import UpcomingEvent from "./UpcomingEvent";
import GetInvolved from "./Home/GetInvolved";
import Anthem from "./Anthem";

const Home = () => {
    return (
        <>
            <SlideShow />
            <div className="bg-milk">
                <div className="lg:px-15 flex flex-row justify-between mx-8 py-8 items-center md:flex-col">
                    <div >
                        <p className="font-bold">Are you a lawyer?</p>
                        <div className="flex flex-row md:flex-col">
                            <h1 className="font-bold text-3xl">Join us in sharing the gospel of Jesus.</h1>
                            <h1 className="text-3xl"><i>You belong here</i></h1>
                        </div>
                    </div>
                    <div className="my-5">
                        <Button url={'#'} title={'Learn More'} />
                    </div>
                </div>
            </div>
            <Polygon />
            <BranchRow />
            <UpcomingEvent />
            <GetInvolved />
            <Anthem />
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
                <Link to={'#'} className="lg:p-5 md:p-3 bg-darkRed rounded-3xl text-white hover:bg-lightRed lg:font-semibold">Register Now</Link>
            </div> 
        </>
    )
}

export default Home;