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
     title: "Students Supported Through Education",
   },
   {
     id: 2,
     page: "home_1",
     icon: "flaticon-help",
     counter_number: 150,
     title: "Community Volunteers Making Change",
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
                     <p>Center of Hope (NGO/R/7636) is dedicated to transforming lives through education and empowerment in Musoma, Tanzania. We believe in breaking the cycle of poverty by providing scholarships, skill-building programs, and vital resources to young minds. Our vision is to create a world where every child, regardless of gender, has equal access to quality education and the opportunity to thrive.</p>
                     {counter_data.filter((item) => item.page === "home_1").map((item) => (
                        <div key={item.id} className="counter-item counter-text-wrap">
                           <div className={`counter-item__icon ${item.icon_bg}`}><i className={item.icon}></i></div>
                           <div className="counter-item__content">
                              <span className="count-text" data-speed="3000" data-stop="45000"><Count number={item.counter_number} /></span>
                              <span className="counter-title">{item.title}</span>
                           </div>
                        </div>
                     ))}
                     <Link className="cr-btn ml-5 mt-25" href="#">Join Our Mission</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
