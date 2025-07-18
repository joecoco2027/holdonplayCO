import { h1 } from "framer-motion/client";
import Link from "next/link";

export default function ThirdSection(){
    return (
        <div className="flex flex-col justify-center items-center h-140 p-10">
            <div className="text-center w-250">            
            <h1 className="text-7xl font-bold">What is <span className="text-gray-600">Hold<span className="text-blue-400">On</span>Play</span>?</h1>
            <h2 className="font-bold text-2xl">Your <span className="text-blue-400">Independent</span> Music Distrbiution Company</h2>
            <p>HoldOnPlay, a part of Believe, is the leading global platform empowering independent artists to build sustainable careers. Though cutting-edge technology and artist 
                first services, HoldOnPlay offers independent music distribution, publishing administration, and 
                promotional tools that help musicians grow their audience and revenue.
            </p>
            <p>As a pioneer in Hiphop Music Distribution and Independent digital music distribution, HoldOnPlay is dedicated to making music accessible while keeping artists in control</p>
            <button className="p-2 border-2 bg-blue-400 font-bold border-blue-400 rounded-full font-bold"><Link href="/distributionplans">SEE OUR DISTRIBUTION PLANS</Link></button>
        </div>

        </div>
    )
}