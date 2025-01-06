"use client"
import Image from "next/image"
import videoBg from "@/assets/img/env.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const LifeSkillsArea = () => {
    return (
        <>
            <div className="why-choose-area !bg-white overlay py-120">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-content text-gray-700 rmb-65">
                                <div className="section-title mb-60">
                                    <span className="section-title__subtitle mb-10">Our Programs</span>
                                    <h2>Life Skills and <br /> <span>Climate Change</span></h2>
                                </div>

                                <div className="education-content">
                                    <p className="mb-4">
                                        Education goes beyond the classroom. To prepare students for the challenges of the 21st
                                        century, we:
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-3">• Equip them with essential life skills like leadership, entrepreneurship, and teamwork.</li>
                                        <li className="mb-3">• Raise awareness about climate change and environmental sustainability.</li>
                                        <li className="mb-3">• Inspire young minds to adopt eco-friendly practices and become stewards of the environment.</li>
                                    </ul>
                                    <p>
                                        <strong>Impact:</strong> Students not only gain practical skills.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-choose-video">
                                <div className="video rel">
                                    <Image src={videoBg} alt="Life Skills Program" />
                                </div>
                                <Image className="leaf-shape object-cover top_image_bounce" src={leafShape} alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LifeSkillsArea