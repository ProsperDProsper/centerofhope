"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "../../../data/MenuData";
import React, { useState } from "react";

const NavMenu = () => {
    const [navTitle, setNavTitle] = useState("");
    const currentRoute = usePathname();
    const isProgramsPage = currentRoute === "/programs";

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    // Handle scroll to section
    const handleProgramClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        if (isProgramsPage) {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setNavTitle(""); // Close mobile menu after clicking
            }
        }
    };

    // Open mobile menu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    return (
        <ul className="navbar-nav menu-open text-lg-end">
            {menu_data.map((menu: any) => (
                <li
                    key={menu.id}
                    onClick={() => openMobileMenu(menu.title)}
                    className={`${menu.has_dropdown ? "menu-item-has-children" : ""}
                    ${navTitle === menu.title ? "open" : ""} `}
                >
                    <Link
                        href={menu.link}
                        className={`${
                            isMenuItemActive(menu.link) ||
                            (menu.sub_menus &&
                                menu.sub_menus.some(
                                    (sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)
                                ))
                                ? "active"
                                : ""
                        }`}
                    >
                        {menu.title}
                    </Link>

                    {menu.has_dropdown && menu.sub_menus && (
                        <ul className="sub-menu">
                            {menu.sub_menus.map((sub_m: any, i: any) => (
                                <li
                                    key={i}
                                    onClick={(e) => e.stopPropagation()}
                                    className={`${navTitle === menu.title ? "open" : ""}`}
                                >
                                    <Link
                                        href={isProgramsPage && menu.title === "Programs" ? `#${sub_m.id}` : sub_m.link}
                                        onClick={(e) => {
                                            if (menu.title === "Programs" && isProgramsPage) {
                                                handleProgramClick(e, sub_m.id);
                                            }
                                        }}
                                        className={sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}
                                    >
                                        {sub_m.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;