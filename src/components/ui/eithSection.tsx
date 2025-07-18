
import Image from "next/image";
import Link from "next/link";

export default function EightSection(){
    return (
        <div className="flex justify-center items-center h-dvh bg-black">
            <Image src="/forhome/kingofstatenisland.webp" width={500} height={500} alt="Earnings with Music Publishing"/>
            <div className="w-200 ml-10">
                <h1 className="text-6xl font-bold">Maximize Your Earnings with <span className="text-blue-400">Music Publishing</span></h1>
                <p>Distribution isn&apos;t only way to make money as an independent musician. When you write a song, you are owed royalities.
                    Your original songs generate publishing revenue with every stream on Spotify, video creation on TikTok, view on Youtube, radio spin, or 
                    live perfomance worldwide. 
                </p>
                <p>Let us help you get the royalties yo are owed by:</p>
                <ul className="list-disc">
                    <li>Collecting your royalties globally/worldwide </li>
                    <li>Tracking your publishing royalties from Spotify, Youtube, TikTok, Radio and thousands of other pay sources</li>
                    <li>Offering advanced analytics on where your perfomance and mechanical royalties come from</li>
                    <li>All while you keep 100% of your copyrights</li>
                </ul>
                <button className="p-2 m-2 border-blue-400 bg-blue-400 rounded-full border-2">
                    <Link href="/earnings">LEARN MORE</Link>
                </button>
                <button className="p-2 m-2 border-blue-400 bg-gray-800 rounded-full border-2">
                    <Link href="/earningsvideo">PLAY VIDEO</Link>
                </button>
            </div>
        </div>
    )
}