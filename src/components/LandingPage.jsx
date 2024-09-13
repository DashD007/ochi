import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
const LandingPage = () =>{
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1">
            <div className="landingText mt-[20vh] pl-12 relative">
                {["We create","Eye-Opening","Presentations"].map((item,index) => {
                    return (<div key={index}>{index === 1 && <motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.76, 0, 0.24, 1],delay:.4,duration:1}} className={`w-[9vw] h-[6vw] rounded-md bg-cover  bg-[url('ochi.jpg')] inline-block mr-[1vw]`}></motion.div>}<h1 className="text-[9vw] font-['founder'] leading-[7vw] uppercase text-white inline ">{item}</h1></div>)
                })}
            </div>
            <div className="w-full border-t-[1px] mt-24 border-zinc-700 py-3 px-12 flex items-center justify-between">
                {["For public and private companies","From the first pitch to IPO"].map((item,index) => {return <p key={index} className="text-white font-light font-['Montreal'] ">{item}</p>})}
                <div className="flex gap-4">
                    <p className="flex items-center justify-center uppercase text-white font-['Montreal'] font-light px-3 py-1 rounded-full border-[1px] border-white text-sm">Start the project</p>
                    <p className="flex items-center justify-center w-10 h-10 rounded-full text-white border-[1px] border-white rotate-45 font-light"><FaArrowUp/></p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
