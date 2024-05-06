import Header from "./Header";
import '../styles/font.css';

const About = () =>{
    return (
        <>
            <div className="darkLayer slide-animation lg:h-96" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/aboutus.jpg)`,}}>
                <div className="px-16 py-5">
                    <Header />
                    <div className="container mx-auto py-8 text-center text-white">
                        <p className="text-white">Christian Lawyer's Fellowship of Nigeria</p>
                        <h1 className="text-6xl font-bold play-fair">About us</h1>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto bg-milk text-dark p-3">
                <div className="m-3">
                    <div className="flex flex-row justify-evenly sm:flex-col">
                        <div className="flex flex-col text-center">
                            <i class="bi bi-clock text-2xl text-lightRed"></i>
                            <h1 className="text-4xl">42</h1>
                            <h4 className="text-2xl">Years</h4>
                        </div>
                        <div className="flex flex-col text-center">
                            <i class="bi bi-people text-2xl text-lightRed"></i>
                            <h1 className="text-4xl">600+</h1>
                            <h4 className="text-2xl">Members</h4>
                        </div>
                        <div className="flex flex-col text-center sm:my-8">
                            <i className="bi bi-geo-alt-fill text-2xl text-lightRed"></i>
                            <h1 className="text-4xl">50+</h1>
                            <h4 className="text-2xl">Branches</h4>
                        </div>
                        <div className="flex flex-col text-center">
                            <i className="bi bi-globe text-2xl text-lightRed"></i>
                            <h1 className="text-4xl">6</h1>
                            <h4 className="text-2xl">Regions</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;