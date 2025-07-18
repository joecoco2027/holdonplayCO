

import Image from "next/image";
import Link from "next/link";

export default function NinthSection(){
    return (
        <div className="flex flex-row items-center self-center justify-center p-2 h-150">
            <div className="w-200">
                <h1 className="text-6xl font-extrabold">Reach More Fans.</h1>
                <h1 className="text-6xl font-extrabold">Increase Your Streams.</h1>
                <h1 className="text-6xl font-extrabold text-blue-400">Grow Your Music Career.</h1>
                <h2>Join HoldOnPlay to access the Accelerator platform and speed up your success!</h2>
                <p>HoldOnPlay leverages innovative, developed in-house tools to elevate the ideal tracks for 
                    greater audience reach. In the first half of 2024 alone, Accelerator generated 10 billion
                    streams for opted-in artists.
                </p>
                <button className="p-2 m-2 bg-blue-400 border-blue-400 rounded-full border-2"><Link href="/signUp">SIGN UP </Link></button>
                <button className="p-2 m-2 bg-black border-blue-400 rounded-full border-2"><Link href="/watchVideo">WATCH READ THE REPORT</Link></button>
            </div>
            <Image src="/forhome/tool.webp" alt="simple" width={500} height={500}/>
        </div>
    )
}