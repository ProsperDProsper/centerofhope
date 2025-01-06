import Link from "next/link";
import React from "react";

interface DataType {
   id: number;
   item_bg?: string;
   icon: string;
   title: string;
   contact_info?: {
      info_link: string;
      info_title: string;
   }[];
   contact_info_text?: JSX.Element;
}[]

const contact_data: DataType[] = [
   {
      id: 1,
      item_bg:"contact-info-item--green",
      icon: "flaticon-phone-call",
      title: "Phone Number",
      contact_info: [
         {
            info_link: "callto:+255 785 769 9548",
            info_title: "+255 785 769 9548"
         },
         {
                info_link: "callto:+(321)984754",
            info_title: "+ 1 (217) 493-3445"
         }
      ]
   },
   {
      id: 2,
      item_bg: "contact-info-item--yellow",
      icon: "flaticon-phone-call",
      title: "Email Address",
      contact_info: [
         {
            info_link: "mailto:centerofhope24@gmail.com",
            info_title: "centerofhope24@gmail.com"
         },
        
      ]
   },
   {
      id: 3,
      icon: "flaticon-pin",
      title: "Mail Address",
      contact_info_text: (<>P.O BOX 232,  <br />Musoma-Tanzania</>),
   },
]

const ContactInfo = () => {
   return (
      <div className="contact-info-area pb-85">
         <div className="container">
            <div className="row justify-content-center">
               {contact_data.map((item) => (
                  <div key={item.id} className="col-md-4 col-sm-6">
                     <div className={`contact-info-item ${item.item_bg}`}>
                        <div className="contact-info__icon"><i className={item.icon}></i></div>
                        <h5>{item.title}</h5>
                        <div className="contact-info__text">
                           {item.contact_info ? (item.contact_info.map((info, index) => (
                              <React.Fragment key={index}>
                                 <Link href={info.info_link}>{info.info_title}</Link><br />
                              </React.Fragment>
                           ))) : (item.contact_info_text)}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default ContactInfo
