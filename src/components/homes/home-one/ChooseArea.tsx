"use client"
import Image from "next/image"
import videoBg from "@/assets/img/edu.jpeg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const EducationArea = () => {
    return (
        <>
            <div className="why-choose-area !bg-white  overlay py-120">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-content text-gray-700 rmb-65">
                                <div className="section-title mb-60">
                                    <span className="section-title__subtitle mb-10">Our Programs</span>
                                    <h2>Education <br /> <span>Scholarship</span></h2>
                                </div>

                                <div className="education-content">
                                    <p className="mb-4">
                                        We believe that every child deserves the right to education, regardless of their economic
                                        background. Through this program, we:
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-3">• Provide scholarships and school supplies for children from low-income families.</li>
                                        <li className="mb-3">• Work closely with schools and communities to reduce barriers to education.</li>
                                        <li className="mb-3">• Offer mentorship programs to ensure students excel academically and personally.</li>
                                    </ul>
                                    <p>
                                        <strong>Impact:</strong> Over the years, we have helped hundreds of children stay in school, achieve better
                                        academic outcomes, and pursue their dreams.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-choose-video">
                                <div className="video rel">
                                    <Image className="object-cover" src={videoBg} alt="Education Program" />
                                </div>
                                <Image className="leaf-shape top_image_bounce" src={leafShape} alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationArea