import { useEffect } from "react";
import { useState } from "react"

// import bg from "../assets/playfullBG.jpg";
const PlayFull = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth/2;
            let deltaY = y - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    },[])
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".3" className={`w-full h-screen bg-[url('playfullBG.jpg')] bg-cover flex justify-center `}>
        <div  className="w-1/3 flex justify-center gap-10 mt-8">
            <div className="h-[15vw] w-[15vw] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                <div className="h-[8vw] w-[8vw] rounded-full bg-[#212121] flex items-center">
                    <div style={{rotate:`${rotate}deg`}} className="w-full  h-9 flex items-center pl-2">
                        <div className="w-5 h-5 rounded-full bg-white">

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-full bg-[#F6F6F6] flex items-center justify-center">
                <div className="h-[8vw] w-[8vw] rounded-full bg-[#212121] flex items-center">
                    <div style={{rotate:`${rotate}deg`}} className="w-full h-9 flex items-center pl-2">
                        <div className="w-5 h-5 rounded-full bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayFull