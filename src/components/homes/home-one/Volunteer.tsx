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
      className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-[#01ADEF]  h-16 w-16 rounded-full shadow-lg"
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
      className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-[#01ADEF] h-16 w-16  rounded-full shadow-lg"
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
      position: "Co-Founder & CEO ",
      bio: "Maiga has extensive experience working with international nonprofit organizations, focusing on education and community development. He earned his Bachelor's degree in Education from the University of Dar es Salaam and enriched his expertise through an educational exchange program in the United States. Maiga later pursued and completed his Master's degree in the United States, further solidifying his commitment to advancing education globally.",
      thumb: "/assets/img/maiga.jpeg",
      item_bg: "valunteer-item--yellow",
    },
    {
      id: 2,
      page: "home_1",
      name: "John Kuboja",
      position: "Executive Director & Co-Founder",
      bio: "Leading our organization's strategic vision and daily operations.",
      thumb: "/assets/img/stem.JPG",
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
      bio: "Providing strategic guidance for our educational programs.",
      thumb: "/assets/img/stem.JPG",
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
    slidesToShow: Math.min(3, team_data.length), // Dynamically adjust slides to show
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed of auto-scroll
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
              <div key={item.id} className="px-3">
                <div className={`valunteer-item ${item.item_bg}`}>
                  <div className="valunteer-item__img">
                    <Image src={item.thumb} alt={item.name} className="object-cover" width={400} height={500} />
                   
                  </div>
                  <div className="valunteer-item__designation">
                    <h5>{item.name}</h5>
                    <span>{item.position}</span>
                    <p className="mt-2 text-sm text-white">{item.bio}</p>
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
