import HeaderOne from "@/layout/headers/HeaderOne"
import HeroArea from "./HeroArea"
import Event from "./Event"
import FooterOne from "@/layout/footers/FooterOne"
import About from "./About"
import Features from "./Features"
import FAQ from "./FAQ"
import CtaAreaThree from "../home-three/CtaArea"
import EventSliderArea from "@/components/events/events-slider/EventSliderArea"
import Testimonial from "../home-three/Testimonial"

const HomeOne = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <HeroArea />
            <About />
            <Testimonial/>
            {/* <Features /> */}
            <EventSliderArea/>
            {/* <Event /> */}
            <CtaAreaThree/>
            <FAQ />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
