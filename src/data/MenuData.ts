interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        id: string;
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About Us",
        link: "/about",
        has_dropdown: false,
    },
        {
        id: 7,
        title: "gallery",
        link: "/gallery",
        has_dropdown: false,
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Programs",
        link: "/programs",
        sub_menus: [
            { 
                id: "education",
                link: "/programs#education", 
                title: "Education Scholarship Program" 
            },
            { 
                id: "stem",
                link: "/programs#stem", 
                title: "STEM Program" 
            },
            { 
                id: "lifeskills",
                link: "/programs#lifeskills", 
                title: "Life Skills and Climate Change Awareness Program" 
            },
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