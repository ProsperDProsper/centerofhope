import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"

import Features from "@/components/homes/home-one/Features"
import Volunteer from "@/components/homes/home-one/Volunteer"
import CtaArea from "@/components/homes/home-three/CtaArea"
import FAQ from "@/components/homes/home-one/FAQ"
import About from "@/app/about/_components/About"
import Testimonial from "@/components/homes/home-three/Testimonial"

const InnerAbout = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="About Us" page_list="About" style={false} />
            <About/>
            <Features />
            <Volunteer style={true} />
            <Testimonial/>
            <CtaArea />
         </main>
         <FooterOne />
      </>
   )
}

export default InnerAbout;
