interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "About Us",
        link: "/about",
        has_dropdown: false,

     
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Programs",
        link: "#",
           sub_menus: [
            { link: "/education-scholarship", title: "Education Scholarship Program" },
            { link: "/stem-program", title: "STEM Program" },
            { link: "/life-skills-and-climate-change-awareness", title: "Life Skills and Climate Change Awareness Program" },
        ],
    },
   
    {
        id: 5,
        has_dropdown: true,
        title: "Blog",
        link: "/blog",
    
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contacts",
        link: "/contacts",
    },
];

export default menu_data;