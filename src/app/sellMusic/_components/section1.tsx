import Link from "next/link";
import { FaCheck} from "react-icons/fa"
import { RxCross1} from "react-icons/rx"

const prices = [
    {
        stage: "SINGLE",
        price: "$13",
        words: "The MUST have plan for Artist with single song",
        link: "/pay-professional",
        color: "bg-gray-500"
    },
    {
        stage: "EXTENDED PLAY",
        price: "$33",
        words: "Release up to 6 tracks with this package",
        link: "/pay-breakout",
        color: "bg-gray-700"
    },
    {
        stage: "ALBUM",
        price: "$40",
        words: "The essential distribution plan for Artists with 12 tracks",
        link: "/pay-rising",
        color: "bg-gray-900"
    },
    {
        stage: "LONG PLAY",
        price: "$77",
        words: "Release Unlimited tracks with this package",
        link: "/pay-breakout",
        color: "bg-gray-700"
    },
    {
        stage: "PROFESSIONAL",
        price: "$99",
        words: "The essential distribution plan for Labels",
        link: "/pay-rising",
        color: "bg-gray-900"
    }
];

const tableData = [
    {
        name: "Tracks",
        datasingle: "1",
        dataep: "6", 
        dataalb: "12",
        datalp: "Unlimited",
        datapro: "Unlimited"

    },
    {
        name: "Artists",
        datasingle: "1",
        dataep: "1", 
        dataalb: "1",
        datalp: "1",
        datapro: "5+"
    },
    {
        name: "Content ID",
        datasingle: "yellow",
        dataep: "red", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Official Artist Account",
        datasingle: "",
        dataep: "red", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Support",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Label Name",
        datasingle: "",
        dataep: "", 
        dataalb: "",
        datalp: "",
        datapro: "black"
    },
    {
        name: "Pre-Save",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Daily Trend Reports",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Cover Art Creator",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Promotional Opportunities",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    },
    {
        name: "Custom Label Name",
        datasingle: "",
        dataep: "", 
        dataalb: "blue",
        datalp: "green",
        datapro: "black"
    }, 
    {
        name: "Price",
        datasingle: "$13",
        dataep: "$33", 
        dataalb: "$40",
        datalp: "$77",
        datapro: "$99"
    },   
]

export default function Section1(){
    return (
        <div className="flex flex-col p-10 justify-center items-center text-center">
            <h1 className="text-6xl w-300 font-extrabold">Choose the Right Plan  for Your <span className="text-blue-400">Music Distribution</span></h1>
            <div className="relative  rounded-full border-2 w-max">
                <button className=" bg-blue-400 focus:bg-blue-400  mr-2 p-2  rounded-full z:2 ">UNLIMITED PLANS</button>
                <button className="rounded-full  p-2  focus:bg-blue-400 pointer-events-none" >PAY PER RELEASE</button>
            </div>
            <div className="flex m-2 p-2 gap-5 items-center justify-center self-center align-middle">
                <div className="border-5 w-70 border-blue-900  rounded-2xl p-5 relative items-center flex flex-col self-center align-middle">
                    <h1 className="text-2xl">SINGLE</h1>
                    <h1 className="text-2xl">$13/year</h1>
                    <p>The MUST have plan for professional artists and labels.</p>
                    <button className="border-2 mt-12 rounded-full border-gray-300 p-2"><Link href="/pay">GET STARTED</Link></button>
                    
                </div>
                <div className="border-5 w-70 rounded-2xl p-5 border-red-400">
                    <h1 className="text-2xl">EXTENDED PLAY</h1>
                    <h1 className="text-2xl"> $33/year</h1>
                    <p>Release unlimited music plus advanced features to customize your releases.</p>
                    <button className="border-2 rounded-full mt-8 border-gray-300 p-2"><Link href="/pay">GET STARTED</Link></button>
                </div>
                <div className="border-5 w-70 rounded-2xl p-5 border-gray-500">
                    <h1 className="text-2xl">ALBUM</h1>
                    <h1 className="text-2xl"> $40/year</h1>
                    <p>The essential distribution plan. Release unlimited music to 150+ Digital Stores across the globe.</p>
                    <button className="border-2 mt-2 rounded-full border-gray-300 p-2"><Link href="/pay">GET STARTED</Link></button>
                </div>
                <div className="border-5 w-70 rounded-2xl p-5 border-green-400">
                    <h1 className="text-2xl">LONG PLAY</h1>
                    <h1 className="text-2xl"> $77/year</h1>
                    <p>The essential distribution plan. Release unlimited music to 150+ Digital Stores across the globe.</p>
                    <button className="border-2 mt-2 rounded-full border-gray-300 p-2"><Link href="/pay">GET STARTED</Link></button>
                </div>
                <div className="border-5 w-70 rounded-2xl p-5 border-blue-400 relative">
                    <h1 className="text-2xl">PROFESSIONAL</h1>
                    <h1 className="text-2xl"> $99/year</h1>
                    <p>The essential distribution plan. Release unlimited music to 150+ Digital Stores across the globe.</p>
                    <button className="border-2 mt-2 rounded-full border-gray-300 p-2"><Link href="/pay">GET STARTED</Link></button>
                    <div className="absolute top-[-15] p-2 left-15 z-1 rounded-full bg-yellow-400"><h1>BEST DEAL!</h1></div>
                </div>
            </div>
            <table className="text-center items-center self-center justify-center flex flex-col mt-10 align-middle">
                <thead className="text-center align-middle ">
                    <tr className="p-2">
                        <th className="w-100"></th>
                        {prices.map((src, i) => (
                            <th className={`w-50  ${src.color} ${i===0 ? 'rounded-tl-2xl': ''} ${i===prices.length-1 ? 'rounded-tr-2xl': ''}`} key={src.stage}>
                                <div className="">
                                    <h1>{src.stage}</h1>
                                    <h1>{src.price}</h1>
                                    <p>{src.words}</p>
                                    <button><Link href={src.link}>GET STARTED</Link></button>
                                </div>
                            </th>
                        ))}
                    </tr>

                </thead>
                <tbody className="text-center">
                    {tableData.map((src, ii) => (
                        <tr className="" key={src.name} >
                            <td className={`p-3 w-100  flex justify-between align-middle `}>{src.name}</td>
                            <td className={`*:w-50  ${ii === tableData.length - 1 ? "border-0" : "border-b-2" }  border-gray-500 bg-gray-800 ${ii===tableData.length-1 ? 'rounded-bl-2xl': ''}`}>{src.datasingle === 'yellow' ?<FaCheck className="text-yellow-500"/> : src.datasingle}{src.datasingle === "" ? <RxCross1 className="text-red-500"/> : ""}</td>
                            <td className={`*:w-50  ${ii === tableData.length - 1 ? "border-0" : "border-b-2" }  bg-green-900 border-gray-400`} >{src.dataep === 'red' ?<FaCheck className="text-red-500"/> : src.dataep}{src.dataep === "" ? <RxCross1 className="text-red-500"/> : ""}</td>
                            <td className={`*:w-50 ${ii === tableData.length - 1 ? "border-0" : "border-b-2" }  bg-red-900 border-gray-400 `} >{src.dataalb === 'blue' ?<FaCheck className="text-blue-500"/> : src.dataalb}{src.dataalb === "" ? <RxCross1 className="text-red-500"/> : ""}</td>
                            <td className={`*:w-50 ${ii === tableData.length - 1 ? "border-0" : "border-b-2" }  bg-yellow-900 border-gray-400 `} >{src.datalp === 'green' ?<FaCheck className="text-green-500"/> : src.datalp}{src.datalp === "" ? <RxCross1 className="text-red-500"/> : ""}</td>
                            <td className={`*:w-50 ${ii === tableData.length - 1 ? "border-0" : "border-b-2" }  bg-blue-900 border-gray-400 ${ii===tableData.length-1 ? 'rounded-br-2xl': ''}`} >{src.datapro === 'black' ?<FaCheck className="text-black"/> : src.datapro}{src.datapro === "" ? <RxCross1 className="text-red-500"/> : ""}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table> 
        </div>
    )
}