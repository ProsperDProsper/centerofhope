"use client"
import Link from "next/link"
import Slider from 'react-slick'
import Image from "next/image";
import featureShape from "@/assets/img/shapes/three-round-green.png";
import { StaticImageData } from "next/image";

interface DataType {
   id: number;
   page: string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?: string;
}

const features_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon_name: "flaticon-help",
      title: "Education Scholarship",
      desc: "Providing scholarships and school supplies for children from low-income families, working with communities to reduce barriers to education, and offering mentorship programs for academic excellence.",
   },
   {
      id: 2,
      page: "home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "STEM Program",
      desc: "Organizing hands-on STEM workshops and clubs, providing innovative learning tools, and connecting students with STEM professionals to inspire and guide future innovators.",
   },
   {
      id: 3,
      page: "home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Life Skills And Climate Change Awareness",
      desc: "Equipping students with essential leadership and entrepreneurship skills while raising awareness about climate change and environmental sustainability for a better future.",
   },

   // single features - Vision, Mission, Impact statements
   {
      id: 1,
      page: "single_features",
      title: "Our Vision",
      desc: "To create a future where every child in Musoma and the Mara region has access to quality education, equal opportunities, and the skills to thrive in a changing world.",
   },
   {
      id: 2,
      page: "single_features",
      title: "Our Mission",
      desc: "To provide equitable access to quality education, empower students through life skills development, and create awareness about critical global challenges, such as climate change, to inspire the next generation of leaders.",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page: "single_features",
      title: "Why Musoma?",
      desc: "Musoma, located in the Mara region, is a vibrant community with immense potential but faces significant educational challenges, including limited access to quality resources, high dropout rates due to financial constraints, and a lack of exposure to STEM and modern life skills. Through our initiatives, we are bridging these gaps, empowering the youth, and building a stronger, more resilient community.",
      btn_bg: "btn--green",
   },
]

const CustomPrevArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-prev"><i className="flaticon-left-chevron"></i></button>
      </div>
   );
};

const CustomNextArrow = (props: any) => {
   const { onClick } = props;
   return (
      <div className="slider-arrow text-lg-end mb-20">
         <button onClick={onClick} type="button" className="feature-next"><i className="flaticon-next"></i></button>
      </div>
   );
};

const Features = () => {
   const single_slider_settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      dots: true,
      autoplaySpeed: 5000,
   }

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      fade: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               arrows: true,
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ],
   }

   return (
      <div className="features-area rel bgs-cover z-1" style={{ backgroundImage: `url(/assets/img/background/feature-bg.jpg)`, position: "relative" }}>
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
                  <div className="feature-left-wrap bgs-cover text-white overlay" style={{ backgroundImage: `url(/assets/img/background/feature-slider-bg.jpg)` }}>
                     <Slider {...single_slider_settings} className="feature-left-slider">
                        {features_data.filter((item) => item.page === "single_features").map((item) => (
                           <div key={item.id} className="feature-single-slide">
                              <div className="section-title mb-40">
                                 <h3>{item.title}</h3>
                                 <p>{item.desc}</p>
                              </div>
                              <Link className={`cr-btn ${item.btn_bg}`} href="#">Support Us</Link>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>

               <div className="col-xl-9">
                  <div className="feature-content">
                     <div className="row justify-content-between">
                        <div className="col-lg-8">
                           <div className="section-title mb-35">
                              <span className="section-title__subtitle mb-10">Our Programmes</span>
                              <h2>How Can You <span>Make a Difference?</span></h2>
                              <p>Join us in our mission to empower youth through education and create lasting change in the Mara region of Tanzania. Together, we can break the cycle of poverty.</p>
                           </div>
                        </div>
                     </div>
                     
                     <Slider {...settings} className="feature-right-slider row mt-20">
                        {features_data.filter((item) => item.page === "home_1").map((item) => (
                           <div key={item.id} className="col-lg-4">
                              <div className="feature-item">
                                 <div className={`feature-item__icon ${item.icon_bg}`}><i className={item.icon_name}></i></div>
                                 <h4><Link href={`/programs#${item.title.toLowerCase().replace(/\s+/g, '-')}`}>{item.title}</Link></h4>
                                 <p>{item.desc}</p>
                                 <Link href={`/programs/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="read-more mt-4">Learn More <i className="far fa-arrow-right"></i></Link>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
         <div className="feature-shapes">
            <Image className="one right_image_bounce" src={featureShape} alt="Shape" />
         </div>
      </div>
   )
}

export default Features