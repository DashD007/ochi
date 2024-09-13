import image from "../assets/image.jpg";
const AboutUs = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.22" className='w-full min-h-screen bg-[#CDEA68] rounded-t-[25px] pt-[6vw] '>
        <h2 className='text-[3.5vw] font-["Montreal"] pl-[4vw] pr-[6vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h2>
        <div className="border-y-[1px] border-[#a2b754e3] mt-10 pb-[6vw] flex justify-between pl-[4vw] pr-[6vw] py-7">
            <p className="font-['montreal'] w-1/2">What you can expect:</p>
            <div className="flex justify-between w-1/2">
                <div className="flex flex-col gap-4 w-1/2">
                    <p className="font-['montreal'] text-lg">
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p className="font-['montreal'] text-lg">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className=" pl-14 flex w-1/2 flex-col gap-2">
                    <p className="mb-5">S:</p>
                    {["Instagram","Behance","Facebook","LinkedIn"].map((item,index) => {
                        return <a key={index} href="#" className="underline block">{item}</a>
                    })}
                </div>
                
            </div>
        </div>
        <div className="flex justify-between py-4 px-[4vw] w-full pb-10">
            <div className="flex flex-col gap-5 w-1/2">
                <p className="font-[montreal] text-[3.5vw]">Our approach:</p>
                <p className="text-zinc-300 font-['montreal'] bg-black rounded-full px-5 py-4 flex items-center uppercase self-start">read more <span className="w-6 h-6 rounded-full text-white"></span></p>
            </div>
            <div className="w-1/2">
                <img src={image} className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs