
import Link from "next/link"
export default function FifthSection(){
    return (
        <div className="flex flex-col items-center justify-center h-130 text-center">
            <div className="w-300">
            <h1 className="text-5xl font-bold">Stream & Distribute <span className="text-blue-400">Your Music</span> Without a Label</h1>
            <h2>Sell Your Music Online Worldwide</h2>
            <p>
                Before HoldOnPlay, artists needed a label to get their music sold online. In 2025, we disrupted the industry partnering directly 
                with Digital Stores to allow any musician to sell their songs worldwide. Today, HoldOnPlay is the world's leading digital music aggregator.
                Choose an unlimited distribution plan, upload your music and we'll do the rest. Your music will hit top digital stores, like Spotify and Apple Music, in no time
            </p>
            <button className="rounded-full border-2 p-2 bg-blue-400 font-bold border-blue-400">
                <Link href="/sellmusic">SELL YOUR MUSIC</Link>
            </button>
            </div>
        </div>
    )
}