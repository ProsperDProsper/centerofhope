import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <HeaderOne style_1={false} style_2={false} />
         <main>
            <Breadcrumb page_title="Our Latest Updates And Success Stories" page_list="Blog" style={false} />
            <BlogArea/>
         </main>
         <FooterOne />
      </>
   )
}

export default Blog;
