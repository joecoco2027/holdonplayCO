

import Image from "next/image";
import Link from "next/link";

export default function SeventhSection(){
    return (
        <div className="flex flex-row items-center self-center justify-center h-150">
            <div className="w-200">
                <h1 className="text-6xl font-extrabold">Be Your Own <span className="text-blue-400">Graphic Designer</span></h1>
                <h2>Create your Cover Art with Layouts, Images, Presets, Filters, Fonts, and Overlays</h2>
                <p>Customize your HoldOnPlay Cover Art during the upload process</p>
                <button className="p-2 m-2 bg-blue-400 font-bold border-blue-400 rounded-full border-2"><Link href="/signUp">SIGN UP NOW</Link></button>
                <button className="p-2 m-2 bg-black font-bold border-blue-400 rounded-full border-2"><Link href="/watchVideo">WATCH VIDEO</Link></button>
            </div>
            <Image src="/forhome/tool.webp" alt="simple" width={500} height={500}/>
        </div>
    )
}