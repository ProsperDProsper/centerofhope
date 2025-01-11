"use client"
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import Slider from "react-slick";
import Image from "next/image";

const testimonial_data = [
    {
        id: 1,
        name: "Zawadi Majengo",
        designation: "Form 4 Student, Musoma Secondary",
        desc: "Kupitia msaada wa Center of Hope, nimeweza kuendelea na masomo yangu bila wasiwasi wa ada. Wamenisaidia pia kujifunza stadi za maisha na kujenga ndoto zangu. Leo nina matumaini ya kuwa daktari siku za usoni.",
        img: "/assets/img/testimonial1.jpg",
        quote_icon: "/assets/img/quote-icon.png",
    },
    {
        id: 2,
        name: "Juma Hamisi",
        designation: "Form 6 Graduate, Now University Student",
        desc: "Nilitoka familia maskini sana huko Bunda, lakini Center of Hope walinipa fursa ya kusoma. Leo nasoma Chuo Kikuu cha Dar es Salaam. Programu zao za kujenga ujuzi zimenisaidia kuwa kiongozi bora.",
        img: "/assets/img/testimonial2.jpg",
        quote_icon: "/assets/img/quote-icon.png",
    },
    {
        id: 3,
        name: "Sarah Bennett",
        designation: "Monthly Donor from Vancouver",
        desc: "After visiting Musoma and seeing firsthand how Center of Hope transforms young lives through education, I became a committed supporter. Their transparent approach and direct impact on students' lives is remarkable.",
        img: "/assets/img/testimonial3.jpg",
        quote_icon: "/assets/img/quote-icon.png",
    },
    {
        id: 4,
        name: "Bahati Nyambuya",
        designation: "Community Parent, Musoma",
        desc: "Watoto wangu wawili wamepata elimu kupitia Center of Hope. Wamenisaidia kama mzazi kuelewa umuhimu wa elimu kwa wasichana. Leo binti yangu anasoma na ana ndoto kubwa.",
        img: "/assets/img/testimonial4.jpg",
        quote_icon: "/assets/img/quote-icon.png",
    },
    {
        id: 5,
        name: "Dr. Richard Thompson",
        designation: "Educational Partner, UK Education Initiative",
        desc: "Working with Center of Hope has shown me the incredible potential in Mara's youth. Their holistic approach to education, combining academic support with life skills, creates lasting change. The dedication of their local team is inspiring.",
        img: "/assets/img/testimonial5.jpg",
        quote_icon: "/assets/img/quote-icon.png",
    },
];

const Testimonial = () => {
   const CustomPrevArrow = (props: { onClick: any; }) => {
      const { onClick } = props;
      return (
         <button onClick={onClick} type="button" className="left-arrow slick-arrow" style={{ display: 'block' }}>
            <i className="flaticon-left-chevron"></i>
         </button>
      );
   };

   const CustomNextArrow = (props: { onClick: any; }) => {
      const { onClick } = props;
      return (
         <button onClick={onClick} type="button" className="right-arrow slick-arrow" style={{ display: 'block' }}>
            <i className="flaticon-next"></i>
         </button>
      );
   };

   const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      fade: false,
      dots: false,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               arrows: true,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               arrows: true,
            },
         },
      ],
   };

   return (
      <div className="testimonials-area-three lg:py-60 rel z-1">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="section-title text-center ">
                     <span className="section-title__subtitle m">Testimonials</span>
                     <h3>What Our <span>Community</span> Says</h3>
                     <p>Discover the heartfelt stories and experiences from those who have been touched by the Center of Hope.</p>
                  </div>
               </div>
            </div>

            <Slider {...settings} className="row justify-content-center gap-4">
               {testimonial_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                     <div className="testimonial-item-three d-flex md:mx-8 flex-column justify-content-between h-full" style={{ minHeight: '300px' }}>
                        <div>
                           <h4 className="name mt-6">{item.name}</h4>
                           <span className="designation">{item.designation}</span>
                           <div className="text mt-2">{item.desc}</div>
                        </div>
                        <div className="icon mt-3">
                           <Image src={quoteIcon_2} alt="Quote" width={40} height={40} />
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
         <div className="testimonials-bg bgs-cover" style={{ backgroundImage: `url(assets/img/background/feature-bg.jpg)` }}></div>
      </div>
   );
};

export default Testimonial;