import CardContainer from "./CardContainer"

function Featured() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full min-h-screen bg-zinc-800 text-white">
        <div className="border-b-[1px] border-zinc-700 pt-[5vw] pb-[2vw] px-[4vw]">
            <h2 className="font-[montreal] text-[3.5vw]">Featured projects</h2>
        </div>
        <div>
            <CardContainer words={["cardboard spaceship","a2h & matt horn"]} imagesrc={["https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png","https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"]}/>
            <CardContainer words={["fyde","vise"]} imagesrc={["https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png","https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"]} />
        </div>
    </div>
  )
}

export default Featured