"use client"

import Link from "next/link";
import NavLink from "./NavLink";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="container px-2 py-4">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <Link
                        href={"/"}
                    >
                        <Image
                            src="/Logo_Web_Developer.png"
                            width="200"
                            height="200"
                            //className={}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                          onClick={() => setNavbarOpen(true)}
                          className="flex items-center px-3 py-2 text-black focus:outline-dashed"
                        >
                            <FaBars className="h-6 w-6" />
                        </button>
                    ) : (
                        <button
                          onClick={() => setNavbarOpen(false)}
                          className="flex items-center px-3 py-2 text-black focus:outline-dashed"
                        >
                          <HiOutlineXMark className="h-6 w-6" />
                        </button>
                    )}
                    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
                </div>
                <div className="self-center hidden md:block">
                    <ul className="flex flex-row">
                        {navLinks.map((link, index) => (
                            <li key={index} className="mr-4">
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;