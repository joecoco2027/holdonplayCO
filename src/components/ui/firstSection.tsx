
import Link from "next/link"
export default function FirstSection(){
    return (
        <div className="h-dvh flex flex-col justify-center items-center bg-[url('/Back1.png')] bg-cover">
            <h1 className="text-7xl font-bold"><span className="text-blue-400">Music Distribution</span> Services</h1>
            <p>Get your Music on Spotify, Apple Music, TikTok, Youtube, Tidal, Tencent and more.</p>
            <p>Keep 100% ownership of your music and stay in control of your career. Unlimited Releases starting at $22.99/year</p>
            <button className="rounded-full border-2 bg-blue-400 font-bold border-blue-400 p-2">
                <Link href="/plans">
                DISTRIBUTE My MUSIC ONLINE
            </Link></button>
        </div>
    )
}