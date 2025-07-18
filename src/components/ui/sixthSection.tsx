"use client";

import Image from "next/image";
import { useState } from "react";
import  { FaGreaterThan, FaLess, FaLessThan} from "react-icons/fa"
const artistsay = [
    {
        "name": "ClonOnly",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "StupidBoyfriend",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Muller",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Phoncedady",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Benson",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "Thug Chris",
        "image": "/forhome/very.jpg",
        "words": "HoldOnPlay been very professional and easy to work with. HoldOnPlay has played a huge role in my music career and process of staying independent. Their customer service is also great - responding and resolving issues quickly",
    },
    {
        "name": "bugsarebugs",
        "image": "/forhome/very.jpg",
        "words": "Wanangu , HoldOn Play ni moto. Ni Kampuni ambayo unaweza kujisamamia wewe na mziki wako na mapato kupata yote kamili",
    },
]
export default function SixthSection(){
    const [currentIndex, setcurrentIndex] = useState(0);

    const prevSlide = () => {
        setcurrentIndex((prev) => (prev === 0 ? artistsay.length-1 : prev - 1));
    };
    const nextSlide = () => {
        setcurrentIndex((prev) => (prev === artistsay.length-1  ? 0 : prev + 1));
    };
    return(
    <div className="flex flex-col h-150 justify-center items-center text-center overflow-scroll bg-black">
        <h1 className="text-5xl font-bold">What are <span className="text-blue-400">Artists </span>Saying About HoldOnPlay?</h1>
        <div className="w-200 relative">
            <div className="flex flex-row overflow-scroll transition-transform duration-300 ease-linear">
            {artistsay.map((src, i) => (
                <div className="p-5 flex-2/3 min-w-fit items-center self-center justify-center flex flex-col transition-transform duration-300 " key={src.name}  style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                    <div className="flex-shrink-0"><Image src={src.image} width={200} height={100} alt="username" className="rounded-full "/></div>
                    <h1 className="text-white font-bold">{src.name}</h1>
                    <p className="">{src.words }</p>
                </div>
            ))}
            </div>
            <button className="absolute top-50 p-5 left-0 border-blue-400 bg-blue-400" onClick={prevSlide}><FaLessThan/></button>
            <button className="absolute top-50 p-5 right-0 border-blue-400 bg-blue-400" onClick={nextSlide}><FaGreaterThan/></button>

        </div>
    </div>
    )
}