import Image from "next/image";
import volunteerVideoThumb from "@/assets/img/stem.jpg";

const CommunityProgram = () => {
    return (
        <div className="become-volunteer-video-area pb-16">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <div className="become-volunteer-video mb-14 image">
                            <Image className="object-cover" src={volunteerVideoThumb} alt="Community Awareness Program" />
                        </div>
                    </div>
                    
                    <div className="col-xl-5">
                        <div className="become-volunteer-video-content mb-12">
                            <div className="section-title">
                                <span className="section-title__subtitle mb-3">02 </span>
                                <h3>Community Awareness Programs</h3>
                            </div>
                            
                            <p className="mb-4">
                                Be part of creating a sustainable future by engaging in our community outreach initiatives.
                                Volunteers can work on:
                            </p>
                            
                            <ul className="list-style-two">
                                <li>Raising awareness about climate change and promoting eco-friendly practices.</li>
                                <li>Teaching essential life skills to equip individuals for personal and professional growth.</li>
                            </ul>
                            
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityProgram