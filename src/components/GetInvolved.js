import Header from "./Header";
import '../styles/font.css';

const GetInvolved = () =>{
    return (
        <div className="darkLayer slide-animation" style={{height: '80vh', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/involve.jpg)`,}}>
            <div className="px-16 py-5">
                <Header />
            </div>
            <div className="container mx-auto py-8 text-center text-white">
                <p className="text-white">We are CLASFON</p>
                <h1 className="text-6xl font-bold play-fair">Get Involved</h1>
            </div>
        </div>
    )
};

export default GetInvolved;