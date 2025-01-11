import Wrapper from "@/layout/Wrapper";
import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import GalleryGrid from '../../components/GalleryGrid'

export const metadata = {
   title: "Center of hope gallery -See images on what we have been doing lately",
};
const index = () => {
   return (
      <Wrapper>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Gallery" page_list="Our Images" style={false} />
            {/* <Brand style={true} /> */}
        <GalleryGrid/>
        
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index