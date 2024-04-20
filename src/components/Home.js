import Button from "./Button";
import SlideShow from "./SlideShow";
import Polygon from "./Polygon";
import BranchRow from "./BranchRow";
import UpcomingEvent from "./UpcomingEvent";
import GetInvolved from "./Home/GetInvolved";
import Anthem from "./Anthem";

const Home = () =>{
    return(
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
      </>
    )
}

export default Home;