import Image from "next/image"
import Count from "./Count"


const FaqContent = () => {
   return (
      <>
         <Image src={'/assets/img/about/contact.JPG'} width={500} height={500} className="object-cover" alt="Man" />
         <div className="experiences-years">
            <span className="experiences-years__number">10</span>
            <span className="experiences-years__text">Years Experiences</span>
         </div>
         <div className="counter-item counter-text-wrap">
            <div className="counter-item__content">
               <span className="count-text" data-speed="200" data-stop="200"><Count number={200} /></span>
               <h5 className="counter-title">Volunteers</h5>
            </div>
         </div>
         
         <div className="project-complete">
            <div className="project-complete__icon">
               <i className="flaticon-charity"></i>
            </div>
            <div className="project-complete__content">
               <h5>We Completed 15+ Project</h5>
               <span>Support Our Course</span>
            </div>
         </div>
      </>
   )
}

export default FaqContent
