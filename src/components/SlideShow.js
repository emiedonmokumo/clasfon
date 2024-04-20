import { useState, useEffect } from "react";
import Header from "./Header";
import Button from "./Button";

const slides = [
    {
        bgImage: '/assets/flag.jpg',
        subHead: 'A NEW LEGAL PROFESSION',
        head: 'ANCHORED ON CHRIST',
        button: {
            url: '#',
            title: 'JOIN US'
        }
    },
    {
        bgImage: '/assets/classfonhome.jpeg',
        subHead: 'Welcome home to',
        head: 'CLASFON',
        button: {
            url: '#',
            title: 'LEARN MORE!'
        }
    },
    {
        bgImage: '/assets/slide3.jpg',
        subHead: 'NATIONAL CONFERENCE',
        head: 'THE LORD OUR LAW GIVER',
        button: {
            url: '#',
            title: 'REGISTER'
        }
    },
]

const SlideShow = () =>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoplay, setIsAutoplay] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        if (isAutoplay) {
            const nextIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(nextIndex);
        }
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [currentIndex, isAutoplay]);


    return (
        <div className="darkLayer slide-animation" style={{height: '100vh', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${slides[currentIndex].bgImage})`,}}>
            <div className="lg:px-16 py-5 md:px-5">
                <Header />
            </div>
            <div className="text-center py-12">
                <div className="flex flex-row justify-center items-center">
                    <img src="/assets/slide-title-border.png" alt="" style={{height: '10px'}}/>
                    <p className="text-1xl text-white">{slides[currentIndex].subHead}</p>
                    <img src="/assets/slide-title-border.png" alt="" style={{height: '10px'}}/>
                </div>
                <div className="play-fair">
                    <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold">{slides[currentIndex].head}</h1>
                </div>
                <p className="text-white">Christian Lawyers Fellowship of Nigeria</p>
                <div className="my-5">
                    <Button url={slides[currentIndex].button.url} title={slides[currentIndex].button.title}/>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;