import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import AboutUs from "./components/AboutUs"
import PlayFull from "./components/PlayFull"
import Featured from "./components/Featured"
import BrandPage from "./components/BrandPage"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-800 overflow-hidden">
      <Header/>
      <LandingPage/>
      <Marquee/>
      <AboutUs/>
      <PlayFull/>
      <Featured/>
      <BrandPage/>
      <Footer/>
    </div>
  )
}

export default App