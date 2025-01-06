import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"
import aboutImg_1 from "@/assets/img/about/about1.jpeg"
import aboutImg_2 from "@/assets/img/about/about3.jpeg"
import aboutImg_3 from "@/assets/img/about/about2.jpeg"

interface DataType {
   id: number;
   page: string;
   icon: string;
   counter_number: number;
   title: string;
   icon_bg?: string;
}

const counter_data: DataType[] = [
   {
     id: 1,
     page: "home_1",
     icon: "flaticon-solidarity",
     counter_number: 1000,
     title: "Students Supported",
   },
   {
     id: 2,
     page: "home_1",
     icon: "flaticon-help",
     counter_number: 150,
     title: "Community Volunteers",
     icon_bg: "counter-item__icon--green",
   },

   // home two
   {
    id: 1,
    page: "home_2",
    icon: "flaticon-solidarity",
    icon_bg: "counter-item__icon--green",
    title: "Students",
    counter_number: 1000,
   },
   {
    id: 2,
    page: "home_2",
    icon: "flaticon-help",
    title: "Volunteers",
    counter_number: 150,
   },
   {
    id: 3,
    page: "home_2",
    icon: "flaticon-heart",
    icon_bg: "counter-item__icon--yellow",
    title: "Programs",
    counter_number: 3,
   },
]

const About = () => {
   return (
      <div className="about-area py-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="about-image-part">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="About" />
                           </div>
                           <div className="project-complete mb-30">
                              <div className="project-complete__icon">
                                 <i className="flaticon-charity"></i>
                              </div>
                              <div className="project-complete__content">
                                 <h5>Empowering Youth in Musoma</h5>
                                 <span>Breaking cycles of poverty</span>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-sm-6">
                           <div className="image mt-65 rmt-15 rel">
                              <Image src={aboutImg_2} alt="About" />
                              <div className="experiences-years">
                                 <span className="experiences-years__number">10</span>
                                 <span className="experiences-years__text">Years of Impact</span>
                              </div>
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="about-content-part rmt-65">
                     <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">About us</span>
                        <h2>Empowering Dreams in <span>Mara Region</span></h2>
                     </div>
                     <p className="mb-4">Center of Hope (Registration Number 00NGO/R/7636) is a nonprofit organization
dedicated to empowering girls and boys in the Mara region by breaking the cycle of
poverty and inequality. With a mission to support both girls and boys through
scholarships, skill-building programs, and vital resources, the organization enables
young people to pursue their dreams and build a better future. Center of Hope envisions
a world where every child, regardless of gender, has equal access to quality education
and the tools necessary to thrive, creating brighter futures for individuals and their
communities.</p>
                     <p>Our organization is dedicated to transforming education in Musoma and the Mara region
of Tanzania. We aim to empower students, especially those from underprivileged
backgrounds, by addressing the critical challenges in the education sector. By focusing
on access, quality, and innovation, we work to ensure that every child has the
opportunity to learn, grow, and thrive.</p>
               
                     <Link className="cr-btn ml-5 mt-25" href="#">Join The Mission</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
