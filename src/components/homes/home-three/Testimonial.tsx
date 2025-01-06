"use client"
import quoteIcon_2 from "@/assets/img/testimonials/quote-icon2.png";
import Slider from "react-slick";
import Image from "next/image";

const testimonial_data = [
   {
      id: 1,
      name: "John Doe",
      designation: "CEO, Example Corp",
      desc: "The Center of Hope provided unparalleled support during challenging times.",
      img: "/assets/img/testimonial1.jpg",
      quote_icon: "/assets/img/quote-icon.png",
   },
   {
      id: 2,
      name: "Jane Smith",
      designation: "Community Leader",
      desc: "This organization truly makes a difference. Their dedication to empowering individuals is inspiring.We were fully in awe",
      img: "/assets/img/testimonial2.jpg",
      quote_icon: "/assets/img/quote-icon.png",
   },
   {
      id: 3,
      name: "Emily Johnson",
      designation: "Volunteer",
      desc: "Volunteering here has been a life-changing experience. The positive impact they create is evident everywhere.",
      img: "/assets/img/testimonial3.jpg",
      quote_icon: "/assets/img/quote-icon.png",
   },
   {
      id: 4,
      name: "Michael Brown",
      designation: "Donor",
      desc: "Knowing my contributions help transform lives through the Center of Hope is immensely gratifying.",
      img: "/assets/img/testimonial4.jpg",
      quote_icon: "/assets/img/quote-icon.png",
   },
   {
      id: 5,
      name: "Olivia Davis",
      designation: "Beneficiary",
      desc: "The Center of Hope gave me the tools to rebuild my life. I am forever grateful for their guidance and support.",
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