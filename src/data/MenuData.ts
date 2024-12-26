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
        has_dropdown: true,
        title: "About Us",
        link: "#",
        sub_menus: [
            { link: "#", title: "Our Mission" },
            { link: "#", title: "Our Vision" },
            { link: "#", title: "Our Team" },
        ],
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Programs",
        link: "#",
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