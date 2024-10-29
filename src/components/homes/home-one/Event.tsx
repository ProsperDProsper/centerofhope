"use client"
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/1.jpg";
import eventThumb_2 from "@/assets/img/events/2.jpeg";
import eventThumb_3 from "@/assets/img/events/3.jpg";
import eventThumb_4 from "@/assets/img/events/4.jpg";
import eventThumb_5 from "@/assets/img/events/5.jpeg";
import eventThumb_6 from "@/assets/img/events/6.jpg";

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   date?: string | number;
   city: string;
   time?: string;
   item_bg?: string;
   desc?: string;
}

const event_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: eventThumb_1,
      title: "Maria's Journey to University",
      date: "Class of 2023",
      city: "Musoma Secondary",
   },
   {
      id: 2,
      page: "home_1",
      thumb: eventThumb_2,
      title: "John's Tech Training Success",
      date: "Class of 2022",
      city: "Vocational Program",
   },
   {
      id: 3,
      page: "home_1",
      thumb: eventThumb_3,
      title: "Sarah's Teaching Dream",
      date: "Class of 2023",
      city: "Teacher Training Program",
   },
   {
      id: 4,
      page: "home_1",
      thumb: eventThumb_4,
      title: "David's Business Journey",
      date: "Class of 2021",
      city: "Entrepreneurship Program",
   },
   {
      id: 5,
      page: "home_1",
      thumb: eventThumb_5,
      title: "Grace's Medical Aspirations",
      date: "Class of 2023",
      city: "Science Program",
   },
   {
      id: 6,
      page: "home_1",
      thumb: eventThumb_6,
      title: "Peter's Community Leadership",
      date: "Class of 2022",
      city: "Leadership Program",
   },
]

const Event = () => {
   return (
      <div className="our-event-area pt-120 pb-95 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center mb-65">
                     <span className="section-title__subtitle mb-10">Featured Stories</span>
                     <h3>Lives <span>We've Changed</span></h3>
                     <p>Meet some of our remarkable students who are breaking barriers and achieving their dreams through education and determination.</p>
                  </div>
               </div>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 3 }}>
               <Masonry columnsCount={3} gutter="30px" className=" events-active">
                  {event_data.filter((item) => item.page === "home_1").map((item) => (
                     <div key={item.id} className="event-item">
                        <Image src={item.thumb} alt="Success Story" />
                        <div className="event-item__hover">
                           <h4><Link href="/success-stories">{item.title}</Link></h4>
                           <ul>
                              <li><i className="flaticon-time"></i> <span>{item.date}</span></li>
                              <li><i className="flaticon-map"></i> <span>{item.city}</span></li>
                           </ul>
                        </div>
                     </div>
                  ))}
               </Masonry>
            </ResponsiveMasonry>
         </div>
      </div>
   )
}

export default Event