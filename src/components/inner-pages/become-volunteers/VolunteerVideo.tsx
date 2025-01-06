import Image from "next/image";
import volunteerVideoThumb from "@/assets/img/stem.jpg";

const StemProgram = () => {
    return (
        <div className="become-volunteer-video-area pb-65">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <div className="become-volunteer-video  mb-55 image">
                            <Image className="object-cover" src={volunteerVideoThumb} alt="STEM Program" />
                        </div>
                    </div>

                    <div className="col-xl-5">
                        <div className="become-volunteer-video-content mb-45">
                            <div className="section-title">
                                <span className="section-title__subtitle mb-10">Our Programs</span>
                                <h3>STEM Program</h3>
                            </div>
                            
                            <p className="mb-4">
                                In today's fast-evolving world, skills in Science, Technology, Engineering, and Mathematics
                                (STEM) are critical. We:
                            </p>

                            <ul className="list-style-two">
                                <li>Organize STEM workshops and clubs for primary and secondary school students.</li>
                                <li>Provide hands-on learning opportunities using innovative tools and resources.</li>
                                <li>Connect students with mentors and professionals in STEM fields to inspire and guide them.</li>
                            </ul>
                            
                            <p className="mt-4">
                                <strong>Impact:</strong> Our program has sparked curiosity and creativity, encouraging students to think
                                critically and solve real-world problems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StemProgram