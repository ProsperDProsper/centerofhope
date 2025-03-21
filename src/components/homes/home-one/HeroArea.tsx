import Link from "next/link"

const heroData = {
    backgroundImage: "/assets/img/hero/hero.jpeg",
    heading: {
        prefix: "Empowering Dreams Through",
        highlight: "Education",
        suffix: "in Tanzania"
    },
    description: "Every child deserves a chance to shine. Join us in breaking the cycle of poverty through education and empowerment in Tanzania",
    buttons: [
        {
            text: "Donate",
            link: "/donate",
            className: "cr-btn"
        },
        {
            text: "Contact US",
            link: "/contacts",
            className: "cr-btn btn--yello btn--style-two !bg-transparent !border-0 !border-blue-400"
        }
    ]
}

const HeroArea = () => {
    return (
        <div 
            className="hero-area bgs-cover overlay pt-155 pb-170" 
            style={{backgroundImage: `url(${heroData.backgroundImage})`}}
        >
            <div className="container container-1370">
                <div className="hero-content text-center text-white">
                    <h1>
                        {heroData.heading.prefix} <span>{heroData.heading.highlight}</span> {heroData.heading.suffix}
                    </h1>
                    <p>{heroData.description}</p>
                    <div className="hero-btns pt-30 rpt-10">
                        {heroData.buttons.map((button, index) => (
                            <Link 
                                key={index}
                                className={button.className} 
                                href={button.link}
                            >
                                {button.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroArea