"use client"
import Image from "next/image"
import videoBg from "@/assets/img/edu.jpg"
import leafShape from "@/assets/img/shapes/three-round-green.png"

const VolunteerArea = () => {
    return (
        <>
            <div className="why-choose-area !bg-white overlay py-120">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-content text-gray-700 rmb-65">
                                <div className="section-title mb-60">
                                    <span className="section-title__subtitle mb-10">01 . </span>
                                    <h2>Support Us By Teaching  <br /> <span>In our Local Schools</span></h2>
                                </div>
                                
                                <div className="education-content">
                                    <p className="mb-4">
                                        Join our efforts to improve education by volunteering as a teacher for English and 
                                        Maths in our local schools. Your time and knowledge can help empower young minds 
                                        and open doors to brighter futures for our students.
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-3">• Teach essential English and Mathematics skills to local students</li>
                                        <li className="mb-3">• Help students build confidence in their academic abilities</li>
                                        <li className="mb-3">• Create engaging and interactive learning experiences</li>
                                    </ul>
                               
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="why-choose-video">
                                <div className="video rel">
                                    <Image className="object-cover" src={videoBg} alt="Volunteer Teaching Program" />
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

export default VolunteerArea