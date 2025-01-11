import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/footerData";

import logo_1 from "@/assets/img/logos/logo-white.png";
import donate from "@/assets/img/footer/donate-by.png";

import footerGallery_1 from "@/assets/img/footer/11.jpg";
import footerGallery_2 from "@/assets/img/footer/22.jpg";
import footerGallery_4 from "@/assets/img/footer/44.jpg";
import footerGallery_6 from "@/assets/img/footer/66.jpg";
import footerGallery_5 from "@/assets/img/footer/55.jpg";
import footerGallery_3 from "@/assets/img/footer/33.jpg";

interface ContentData {
   footer_about_text: JSX.Element;
   gallery: StaticImageData[];
}

const footer_content: ContentData = {
   footer_about_text: (<>By supporting the younger generation,you create a safe future for the society</>),
   gallery: [footerGallery_1, footerGallery_2, footerGallery_3, footerGallery_4, footerGallery_5, footerGallery_6],
}

const { footer_about_text, gallery } = footer_content;

const FooterOne = () => {
   return (
      <footer className="footer-area overlay text-white pt-120 bgs-cover" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}>
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="widget widget_about">
                     <div className="logo_footer mb-25">
                        <Link href="/">
                           <Image className="max-w-[250px] max-h-[100px] object-cover" src={logo_1} alt="Logo" />
                        </Link>
                     </div>
                     <p>{footer_about_text}</p>
                     <div className="social-style-one pt-20">
                        <SocialIcon />
                     </div>
                  </div>
               </div>

               {footer_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                     <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{item.widget_title}</h5>
                        <ul>
                           {item.footer_link.map((li, i) => (
                              <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-lg-3 col-md-6 col-sm-8">
                  <div className="widget widget_gallery">
                     <h4 className="widget-title">Photo Gallery</h4>
                     <div className="gallery-photos">
                        {gallery.map((gallery, index) => (
                           <a href="/gallery" style={{cursor:"pointer"}} key={index} ><Image width={100} height={100} className="h-10 w-10 object-coverS" src={gallery} alt="Gallery" /></a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="footer-bottom mt-50">
            <div className="container">
               <div className="footer-bottom__inner">
                  <div className="donate-by">
                     <span>Donate by :</span>
                     <Image src={donate} alt="Donate By" />
                  </div>
                  <div className="copyright">
                     <p>website designed and developed with passion by <a className="text-blue-500 bold" href="callto:+255 766695363">prosper d</a> </p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
