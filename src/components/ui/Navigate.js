
"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const forNavs = [
    {
        name: "SELL YOUR MUSIC", 
        link: "/sellMusic",
    },
    {
        name: "STORES",
        link: "/stores",
    },

    ]
export default function Navigate(){
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);
    return (
        <nav className="flex flex-row text-white justify-between p-2 self-center-safe items-center align-middle sticky top-0 h-20 bg-[rgba(0,0,0,0.7)]">
            <Link href="/"><h1 className="text-3xl font-bold">hold<span className="text-blue-400 text-5xl font-extrabold">ON</span>play</h1></Link>
            <div className="flex relative">
                <ul className="hidden xl:flex md:hidden lg:hidden flex-row flex items-center self-center">
                {forNavs.map((navitem, i) => (
                <Link href={navitem.link} key={navitem.name}><li className="p-4 m-2 hover:border-b-2 hover:border-blue-400" >
                    {navitem.name}
                </li>
                </Link>
                ))}
                </ul>
                <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex relative focus:outline-blue-400"><FiMenu className="hover:text-blue-400"/></button>
                 <div className={`mt-3 space-y-2  top-5 left-[-200] absolute  md:space-y-0 md:space-x-6 ${menuOpen ? 'block' : 'hidden'} `}>
                <ul className="flex-col flex items-center self-center bg-black ">
                {forNavs.map((navitem, i) => (
                <Link href={navitem.link} key={navitem.name}><li className="p-4 m-2 hover:border-b-2 hover:border-blue-400" key={navitem} onClick={() => setMenuOpen(false)}>
                    {navitem.name}
                </li>
                </Link>
                ))}
                </ul> 
            </div>
           
            </div>

            
        </nav>
    )
}