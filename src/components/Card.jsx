import { motion } from "framer-motion";
import {useState} from "react";
function Card(props) {
  const [isHover, setHover] = useState(false);

  // eslint-disable-next-line react/prop-types
  const {left,imagesrc,word} = props;
  return (
    <div className={`w-full h-full relative` } >
        <h1 className={`flex uppercase absolute text-[#CDEA68] z-20 text-[10vw] font-['founder'] top-[50%] -translate-y-[60%] overflow-hidden ${left ? "left-full -translate-x-[50%]" : "right-full translate-x-[50%]"} `}>
            {String(word).split("").map((item,index) => {
                return <motion.span className="block" initial={{y:"100%"}} animate={isHover ? {y:"0%"} : {y:"100%"}}  transition={{ease:[0.65, 0, 0.35, 1] ,delay:index*.05}} key={index}>{item}</motion.span>
            })}
        </h1>  
        <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className=" hoverElem object-cover rounded-lg hover:scale-95" src={imagesrc}/>   
    </div>
  )
}

export default Card