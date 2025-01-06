'use client'

import Breadcrumb from "@/components/common/Breadcrumb"
import FooterOne from "@/layout/footers/FooterOne"
import HeaderOne from "@/layout/headers/HeaderOne"
import Brand from "@/components/common/Brand"
import Features from "@/components/homes/home-two/Features"
import BecomeVolunteer from "@/components/homes/home-three/BecomeVolunteer"
import VolunteerVideo from "./VolunteerVideo"
import CtaArea from "@/components/homes/home-two/CtaArea"
import Testimonial from "@/components/homes/home-two/Testimonial"
import ChooseArea from "@/components/homes/home-one/ChooseArea"
import { useEffect } from "react"

const ProgramsPage = () => {
    useEffect(() => {
        // Handle hash changes for direct links and initial load
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash.slice(1));
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        };

        // Check hash on initial load
        handleHash();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    return (
        <>
            <HeaderOne style_1={false} style_2={false} />
            <main>
                <Breadcrumb page_title="Our Programs" page_list="" style={false} />
                
                <section id="education" className="scroll-mt-20">
                    <ChooseArea />
                </section>
                
                <section id="stem" className="scroll-mt-20">
                    <VolunteerVideo />
                </section>
                
                <section id="lifeskills" className="scroll-mt-20">
                     <Testimonial style={true} />
                </section>

                <CtaArea />
            </main>
            <FooterOne />
        </>
    )
}

export default ProgramsPage