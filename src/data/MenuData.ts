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
        title: "Resources",
        link: "#",
        sub_menus: [
            { link: "#", title: "News & Updates" },
            { link: "#", title: "Success Stories" },
            { link: "#", title: "Gallery" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "#",
    },
];

export default menu_data;