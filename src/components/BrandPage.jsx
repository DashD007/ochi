function BrandPage() {
  return (
    <div className="w-full h-screen flex items-center">
        <div className="w-full h-[55vh] flex gap-4 px-[4vw]">
            <div className="w-1/2 h-full bg-[#004D43] flex flex-col justify-center rounded-lg relative">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className="self-center mt-"/>
                <p className="border-[1px] border-[#CDEA68] rounded-full py-2 px-3 text-[#CDEA68] font-bold self-start absolute bottom-3 left-3">&copy; 2019-2022</p>
            </div>
            <div className="w-1/2 flex gap-4">
                <div className="w-1/2 h-full bg-[#0b342f] flex items-center justify-center rounded-lg relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
                    <p className="border-[1px] border-zinc-300 rounded-full py-2 px-3 text-zinc-300 font-bold self-start absolute bottom-3 left-3">RATING 5.0 ON CLUTCH</p>

                </div>
                <div className="w-1/2 h-full bg-[#0b342f] flex items-center justify-center rounded-lg relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
                    <p className="border-[1px] border-zinc-300 rounded-full py-2 px-3 text-zinc-300 font-bold self-start absolute bottom-3 left-3 uppercase">bussiness bootcamp alumini</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandPage