"use client"

const Brand = ({ style }: any) => {
    return (
       <div className={`client-logo-area ${style ? "py-75" : "bgc-lighter py-30"}`} style={{ backgroundImage: `${style && "url(/assets/img/client-logo/client-logo-section-bg.jpg)"}` }}>
          <div className={`container ${style ? "container-1370" : ""}`}>
             <div className="col-lg-6 !center !mx-auto">
                <div className="why-choose-content text-gray-700 rmb-65">
                    <div className="section-title mb-60">
                        <span className="section-title__subtitle mb-10">03 . </span>
                        <h2>Host Fundraising <br /> <span>Events</span></h2>
                    </div>
                    
                    <div className="education-content">
                        <p className="mb-4">
                            Help us sustain and expand our programs by organizing and hosting fundraising events. 
                            From planning charity drives to hosting benefit dinners, your creativity and leadership 
                            can help us continue making a positive impact.
                        </p>
                    </div>
                </div>
             </div>
          </div>
       </div>
    )
}

export default Brand;