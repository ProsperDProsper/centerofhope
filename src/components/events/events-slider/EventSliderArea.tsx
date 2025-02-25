"use client";
import Image from "next/image";
import Link from "next/link";

const ProgramShowcaseArea = () => {
  const programs = [
    {
      id: '/programs#education',
      title: "Education Scholarship",
      thumb: "/assets/img/education.jpeg",
      desc: "We provide scholarships and school supplies for children from low-income families, work closely with schools and communities to reduce barriers to education, and offer mentorship programs to ensure students excel academically and personally.",
      item_bg: "bg-lighter",
    },
    {
      id: '/programs#stem',
      title: "STEM Program",
      thumb: "/assets/img/stem.JPG",
      desc: "We organize STEM workshops and clubs for primary and secondary school students, provide hands-on learning opportunities using innovative tools and resources, and connect students with mentors and professionals in STEM fields.",
      item_bg: "bg-lighter",
    },
    {
      id: '/programs#lifeskills',
      title: "Life Skills and Climate Change Awareness",
      thumb: "/assets/img/env.jpg",
      desc: "We equip students with essential life skills like leadership, entrepreneurship, and teamwork while raising awareness about climate change and environmental sustainability, inspiring them to become stewards of the environment.",
      item_bg: "bg-lighter",
    },
  ];

  return (
    <div className="our-programs py-16 md:py-64   rel z-1">
      <div className="container">
        <div className="section-title ">
                        <span className="section-title__subtitle ">what we do</span>
                        <h2>Our Programs</h2>
          <p className="max-w-[640px] mb-4">Empowering youth through education, innovation, and sustainability in the Mara region. Our programs focus on providing quality education, building STEM skills, and developing future leaders.</p>
                     </div>
        <div className="row">
          {programs.map((item) => (
            <div key={item.id} className="col-lg-4 d-flex">
              <div
                className={`event-item-three ${item.item_bg} w-100 d-flex flex-column`}
                style={{ height: "100%" }}
              >
                <div
                  className="image rounded-md"
                  style={{ height: "300px", position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={item.thumb}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-md"
                    alt="Program"
                  />
                </div>
                <div
                  className="content flex-grow-1 d-flex flex-column justify-content-between"
                  style={{ padding: "20px" }}
                >
                  <div>
                    <h4>
                      <Link href={`${item.id}`}>{item.title}</Link>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                  <Link className="text-center  " href={`${item.id}`}>
                  <div className="!flex justify-center !text-[#01ADF0] items-center">
                  <p>
                  Read more
                  </p>
                  <i className="flaticon-chevron"></i>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .event-item-three {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .image img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default ProgramShowcaseArea;
