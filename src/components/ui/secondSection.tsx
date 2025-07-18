
import Image from "next/image";
import Link from "next/link";

const logoz = ["/spotify.webp", "/tidal.svg", "/youtube.svg", "/beatport.svg", "/amazon.svg", "/apple.svg"]
export default function SecondSection(){
    return (
        <div className="bg-black flex flex-col justify-center items-center p-20 text-center text-2xl ">
            <div className="w-100 md:w-200 sm:w-150 lg:w-350">
            <h1 className="lg:text-6xl font-bold text-2xl"><span className="text-blue-400">Unlimited Distribution</span> Starting at $22.99/year</h1>
            <p className="text-xl sm:text-sm ">Increase the reach of your music across the most popular stores & platforms like Spotify, Apple Music, TikTok, Youtube and many more. Empower yourself with unlimited distribution opportunities, and get your music heard by a global audience</p>
            <p>Keep 100% ownership of your music, maintaining creative control and authority in your music career</p>
            <div className="flex self-center items-center justify-center p-4">{logoz.map((src, i) => (
                <Image src={src} key={src} width={200} height={300} alt="logos" className="size-20 lg:size-40 "/>
            ))}
            </div>
            <button className="border-2 rounded-full p-2 border-blue-400 bg-blue-400">
                <Link href="/stores">
                    VIEW ALL 150+ StORES
                </Link>
            </button>
            </div>
        </div>
    )
}