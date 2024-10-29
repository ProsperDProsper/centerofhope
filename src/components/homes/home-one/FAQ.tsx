"use client"
import Image from "next/image"
import { useEffect, useState } from 'react'

import aboutImg_1 from "@/assets/img/about/1.jpg";
import aboutImg_2 from "@/assets/img/about/2.jpg";
import aboutImg_3 from "@/assets/img/about/3.jpg";
import aboutImg_4 from "@/assets/img/about/4.jpg";
import aboutShape_1 from "@/assets/img/shapes/three-round-green.png";
import aboutShape_2 from "@/assets/img/shapes/three-round-red.png";

interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const faq_data = [
   {
      id: 1,
      page: "home_1",
      question: "How can I support a student's education at Center of Hope?",
      answer: "You can support our students through various means: monthly sponsorships that cover school fees, uniforms, and supplies; one-time donations; or by contributing to our scholarship fund. We ensure 100% of your donation goes directly to supporting education programs in Musoma, Tanzania.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_1",
      question: "What programs does Center of Hope offer?",
      answer: "We offer three main programs: 1) Educational Scholarships for primary and secondary students, 2) Skills Development workshops including computer training, entrepreneurship, and vocational skills, and 3) Community Engagement programs that promote education awareness in the Mara region.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_1",
      question: "How can I volunteer with Center of Hope?",
      answer: "We welcome volunteers in Musoma who can contribute to our educational programs, mentorship initiatives, or skill-building workshops. We particularly need teachers, mentors, and professionals who can commit to at least 3 months. Contact us at our P.O BOX 232, Musoma-Tanzania for volunteer opportunities.",
      showAnswer: false,
   },
   {
      id: 4,
      page: "home_1",
      question: "What is the selection criteria for student beneficiaries?",
      answer: "We select students based on a combination of academic potential, financial need, and commitment to education. Our selection process involves community leaders, teachers, and family assessments to ensure support reaches those who need it most while maintaining gender balance in our programs.",
      showAnswer: false,
   },
 
]

const FAQ = () => {
   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const initialFaqData: DataType[] = faq_data.filter((item) => item.page === "home_1").map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (id: number) => {
      setFaqData((prevFaqData) => {
         const updatedFaqData = prevFaqData.map((faq) => ({
            ...faq,
            showAnswer: faq.id === id ? !faq.showAnswer : false,
         }));
         return updatedFaqData;
      });
   };

   return (
      <div className="faq-area faq-one py-120">
         <div className="container">
            <div className="row gap-100">
               <div className="col-lg-6">
                  <div className="faq-image-part">
                     <div className="row">
                        <div className="col-6">
                           <div className="image">
                              <Image src={aboutImg_1} alt="About" />
                              <Image className="shape one top_image_bounce" src={aboutShape_1} alt="Shape" />
                           </div>
                           <div className="image">
                              <Image src={aboutImg_3} alt="About" />
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="image">
                              <Image src={aboutImg_2} alt="About" />
                           </div>
                           <div className="image">
                              <Image src={aboutImg_4} alt="About" />
                              <Image className="shape two right_image_bounce" src={aboutShape_2} alt="Shape" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="col-lg-6">
                  <div className="faq-content-part rmt-65 rel z-2">
                     <div className="section-title mb-45 for-hide-summary">
                        <span className="section-title__subtitle mb-10">FAQ</span>
                        <h2>Supporting Education in <span>Musoma</span></h2>
                        <p>Find answers to common questions about how you can help transform lives through education in Tanzania's Mara region.</p>
                     </div>
                     <div className="faq-accordion" id="faqAccordion">
                        {faqData.map((item) => (
                           <div key={item.id} className={`accordion-item ${item.showAnswer ? "active" : ""}`}>
                              <h4 className="accordion-header">
                                 <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} onClick={() => toggleAnswer(item.id)} type="button">
                                    {item.question}
                                 </button>
                              </h4>
                              {item.showAnswer && (
                                 <div className="accordion-collapse collapse show" id={`collapse${item.id}`}>
                                    <div className="accordion-body">{item.answer}</div>
                                 </div>
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ