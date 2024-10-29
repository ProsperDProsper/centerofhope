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
      title: "Join Our Mission",
      desc: "Partner with us to empower youth in Musoma through education and skill-building programs that transform lives.",
   },
   {
      id: 2,
      page: "home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Support Education",
      desc: "Help provide scholarships and educational resources to students in the Mara region, creating pathways to success.",
   },
   {
      id: 3,
      page: "home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Community Impact",
      desc: "Engage with our local community programs that raise awareness about education and create lasting change.",
   },
   {
      id: 4,
      page: "home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Skills Development",
      desc: "Support our skill-building initiatives that prepare young people for future opportunities and success.",
   },

   // single features - Vision, Mission, Impact statements
   {
      id: 1,
      page: "single_features",
      title: "Our Vision",
      desc: "A world where every child in Musoma, regardless of gender, has equal access to quality education and the tools necessary to thrive.",
   },
   {
      id: 2,
      page: "single_features",
      title: "Our Mission",
      desc: "Breaking the cycle of poverty through education, empowerment, and community engagement in Tanzania's Mara region.",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page: "single_features",
      title: "Our Impact",
      desc: "Creating brighter futures through scholarships, skill-building programs, and vital resources that transform individual lives and communities.",
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
                                 <h4><Link href="/cause-details">{item.title}</Link></h4>
                                 <p>{item.desc}</p>
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