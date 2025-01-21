"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import volunteerShape_1 from "@/assets/img/shapes/hand-glass.png";
import volunteerShape_2 from "@/assets/img/shapes/circle-with-line-red.png";
import volunteerShape_3 from "@/assets/img/shapes/heart.png";
import volunteerShape_4 from "@/assets/img/shapes/house-heart.png";

// Arrow Components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-[#01ADEF] h-16 w-16 rounded-full shadow-lg"
    >
      <i className="flaticon-left-chevron text-white"></i>
    </button>
  );
};

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-[#01ADEF] h-16 w-16 rounded-full shadow-lg"
    >
      <i className="flaticon-next text-white"></i>
    </button>
  );
};

interface VolunteerProps {
  style?: boolean;
}

const Volunteer: React.FC<VolunteerProps> = ({ style }) => {
  const team_data = [
    {
      id: 1,
      page: "home_1",
      name: "Maiga Muga",
      position: " CEO & Co-Founder ",
      bio: "Maiga has extensive experience working with international nonprofit organizations, focusing on education and community development. He earned his Bachelor's degree in Education from the University of Dar es Salaam and enriched his expertise through an educational exchange program in the United States. Maiga later pursued and completed his Master's degree in the United States, further solidifying his commitment to advancing education globally.",
      thumb: "/assets/img/maiga.jpeg",
      item_bg: "valunteer-item--yellow",
    },
    {
      id: 2,
      page: "home_1",
      name: "John Kuboja",
      position: "Executive Director & Co-Founder",
      bio: "John holds a Bachelor's degree in Education (BAED) from the University of Dar es Salaam. He has gained extensive experience working with various nonprofit organizations and international agencies. Notably, he served as a team leader for volunteers in the Mara region under UNICEF Tanzania, where he led efforts to advocate for child rights and protection. John's work focused on empowering communities and raising awareness about critical issues affecting children. His expertise in education, program coordination, and community development underscores his unwavering commitment to driving positive change in underserved areas.",
      thumb: "/assets/img/john.jpeg",
      item_bg: "valunteer-item--green",
    },
    {
      id: 3,
      page: "home_1",
      name: "Jessica Ombeni",
      position: "Treasurer",
      bio: "Jessica Ombeni holds a Bachelor's degree in Accounting from the University of Dar es Salaam. With experience working with various companies across Tanzania, she brings a wealth of knowledge and expertise to her role. Passionate about making a positive impact, she is dedicated to using her skills to contribute meaningfully to the development and success of both her organization and the broader community.",
      thumb: "/assets/img/jesca.jpeg",
      item_bg: "valunteer-item--red",
    },
    {
      id: 4,
      page: "home_1",
      name: "Godfrey Chirangi",
      position: "Program Advisor",
      bio: "Godfrey is a dedicated educator and pastor serving at the Mennonite Church, Kwangwa Congregation. With a passion for nurturing both spiritual growth and educational development, Godfrey combines his pastoral calling with his commitment to empowering communities through knowledge and guidance.Godfrey serves as a Program Advisor at the Center of Hope, where he provides strategic leadership and mentorship for various community initiatives. His work focuses on fostering sustainable growth and addressing critical issues such as education, climate change awareness, and life skills development.",
      thumb: "/assets/img/godfrey.jpg",
      item_bg: "valunteer-item--yellow",
    },
    {
      id: 5,
      page: "home_1",
      name: "Nyakwesi Baraka",
      position: "Project Coordinator",
      bio: "Nyakwesi Baraka is an accomplished schoolteacher with extensive experience working in Musoma, particularly in rural areas. Throughout her teaching career, she has transformed the lives of hundreds of students, inspiring and empowering them to reach their full potential. Nyakwesi now brings her expertise and unwavering commitment to the Center of Hope.",
      thumb: "/assets/img/nyakwesi.jpeg",
      item_bg: "valunteer-item--green",
    },
    {
      id: 6,
      page: "home_1",
      name: "Anna Ngasani",
      position: "Community Outreach Coordinator",
      bio: "Anna, a certified Pharmaceutical Technician with over seven years of experience in dispensing, is an education advocate committed to empowering communities through education, health awareness, and sustainable development. Passionate about community work, she actively participates in initiatives that promote peacebuilding, climate justice, and access to quality education.",
      thumb: "/assets/img/anna.JPG",
      item_bg: "valunteer-item--red",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: Math.min(3, team_data.length),
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: Math.min(2, team_data.length),
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const filteredVolunteers = team_data.filter((item) => item.page === "home_1");

  return (
    <div className="volunteer-area pt-120 pb-90 rel z-1">
      <div className="container container-1170">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-60">
              <span className="section-title__subtitle mb-10">Our Team</span>
              {style ? <h3>Meet <span>Our Team</span></h3> : <h2>Our <span>Team</span></h2>}
              <p>Meet the dedicated individuals working to empower youth through education in Musoma</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Slider {...settings} className="volunteer-slider">
            {filteredVolunteers.map((item) => (
              <div key={item.id} className="px-3 h-full">
                <div className={`valunteer-item ${item.item_bg} h-full flex flex-col`}>
                  <div className="valunteer-item__img relative h-96 w-full">
                    <Image 
                      src={item.thumb} 
                      alt={item.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="valunteer-item__designation flex-1 p-6">
                    <h5 className="text-xl font-bold mb-2">{item.name}</h5>
                    <span className="block text-lg mb-4">{item.position}</span>
                    <div className="h-48 overflow-y-auto">
                      <p className="text-sm text-white leading-relaxed">{item.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {style && (
        <div className="valunteet-shapres">
          <Image className="one top_image_bounce" src={volunteerShape_1} alt="Shape" />
          <Image className="two left_image_bounce" src={volunteerShape_2} alt="Shape" />
          <Image className="three right_image_bounce" src={volunteerShape_3} alt="Shape" />
          <Image className="four top_image_bounce" src={volunteerShape_4} alt="Shape" />
        </div>
      )}
    </div>
  );
};

export default Volunteer;