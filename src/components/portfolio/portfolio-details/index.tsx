import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import PortfolioDetailsArea from "./PortfolioDetailsArea"
import VolunteerVideo from "@/components/inner-pages/become-volunteers/VolunteerVideo"
import Brand from "@/components/common/Brand"
import CtaAreaThree from "@/components/homes/home-three/CtaArea"

const PortfolioDetails = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="How You Can Volunteer With Us " page_list="Volunteers" style={false} />
            <PortfolioDetailsArea/>
            <VolunteerVideo  />
            <Brand style={true} />
            <CtaAreaThree/>
         </main>
         <FooterOne />
      </>
   )
}

export default PortfolioDetails;
