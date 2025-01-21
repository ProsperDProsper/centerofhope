interface DataType {
   id:number;
   page:string;
   widget_title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id:1,
      page:"home_1",
      widget_title: "About",
      footer_link: [{ link: "/about", link_title: "Home" }, { link: "/donate", link_title: "Donations" }, { link: "/about", link_title: "About us" }, { link: "#", link_title: "Features" },]
   },
   {
      id:2,
      page:"home_1",
      widget_title: "Quick links",
      footer_link: [{ link: "/programs", link_title: "Our Programmes" },{ link: "/contacts", link_title: "Our Contacts" },{ link: "/volunteers", link_title: "Volunteer Today" }]
   },


   // home two

   {
      id:1,
      page:"home_2",
      widget_title: "About",
      footer_link: [{ link: "#", link_title: "Home" }, { link: "#", link_title: "Donation" }, { link: "#", link_title: "About us" }, { link: "#", link_title: "Event" },]
   },
   {
      id:2,
      page:"home_2",
      widget_title: "Quick links",
      footer_link: [{ link: "#", link_title: "Causes" }, { link: "#", link_title: "About" }, { link: "#", link_title: "New campaign" }, { link: "#", link_title: "Site map" },]
   },
]

export default footer_data;