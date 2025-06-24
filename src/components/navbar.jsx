"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = ["Home", "About", "Why Us", "Products", "Services"]

    function urlFriendly(text) {
        return `${text.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return (
        <>
            {/* Linear blur overlay fixed on top */}
            <div className="fixed top-0 left-0 right-0 h-20 z-888 pointer-events-none linear-blur-to-b" />
            
            {/* Navbar Mobile */}
            <div className={`md:hidden block text-white md:mx-10 navbar absolute top-1 left-0 right-0 w-auto md:px-2 rounded-full h-14 min-h-14 z-999`}>
                <a className="px-4 py-2 bg-main/15 rounded-full text-md font-bold">PT. Bharata Alam Sentosa</a>
            </div>

            {/* Navbar Deskktop */}
            <div className={`md:block hidden text-white mx-4 md:mx-10 navbar fixed top-1 left-0 right-0 w-auto md:px-2 rounded-full h-14 min-h-14 z-999 transition-all duration-300
                ${isScrolled ? "shadow-custom border border-base/10 backdrop-blur-sm bg-black/30" : ""}
                `}>
                <div className="navbar-start">
                    <a className="px-4 py-2 bg-main/15 rounded-full text-md font-bold">PT. Bharata Alam Sentosa</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1">
                        {items.map((item, id) => (
                            <li key={item}>
                                <a
                                    href={id === 0 ? "#land" : `#${urlFriendly(item)}`}
                                >
                                    <button
                                        variant={"ghost"}
                                        className={`bg-other/20 backdrop-blur-sm text-sm px-4 py-2 shadow-xs hover:bg-other text-white font-medium
                                        ${id === 0 && "!rounded-l-full"}
                                        ${id === items.length - 1 && "!rounded-r-full"}
                                        `}
                                    >
                                        {item}
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="#contact" className={`px-4 py-2 rounded-full text-base text-sm font-medium transition-all duration-300 hover:bg-main hover:shadow-custom
                        ${isScrolled ? "bg-main text-white" : "bg-main/20 backdrop-blur-sm"}
                        `}>
                        Contact Us!
                    </a>
                </div>
            </div>



            <div className="">
                {children}
            </div>
        </>
    )
}