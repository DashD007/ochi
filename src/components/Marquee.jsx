import { motion } from "framer-motion";

const Marquee = () =>{
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full rounded-tl-[25px] rounded-tr-[25px] bg-[#004D43] py-[7vw]">
            <div className="flex items-center border-y-[2px] border-[#5d817c] whitespace-nowrap overflow-hidden ">
                <motion.h1 intial={{x:'0%'}} animate={{x:'-100%'}} transition={{duration:5,repeat:Infinity,ease:"linear"}} className="uppercase text-[24vw] text-white font-['founder'] inline -mt-14 -mb-5 leading-none tracking-tight pr-[5vw]">We are ochi</motion.h1>
                <motion.h1 intial={{x:'0%'}} animate={{x:'-100%'}} transition={{duration:5,repeat:Infinity,ease:"linear"}} className="uppercase text-[24vw] text-white font-['founder'] inline -mt-14 -mb-5 leading-none tracking-tight pr-[5vw]">We are ochi</motion.h1>
                <motion.h1 intial={{x:'0%'}} animate={{x:'-100%'}} transition={{duration:5,repeat:Infinity,ease:"linear"}} className="uppercase text-[24vw] text-white font-['founder'] inline -mt-14 -mb-5 leading-none tracking-tight pr-[5vw]">We are ochi</motion.h1>

            </div>
        </div>
    )
}

export default Marquee;