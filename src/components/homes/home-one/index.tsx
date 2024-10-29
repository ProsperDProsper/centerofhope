import HeaderOne from "@/layout/headers/HeaderOne"
import HeroArea from "./HeroArea"
import Event from "./Event"
import FooterOne from "@/layout/footers/FooterOne"
import About from "./About"
import Features from "./Features"
import FAQ from "./FAQ"
import CtaAreaThree from "../home-three/CtaArea"

const HomeOne = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <HeroArea />
            <About />
            <Features />
            <Event />
            <CtaAreaThree/>
            <FAQ />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeOne
