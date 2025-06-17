"use client"

import { useEffect, useState } from "react";

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
    
    return (
        <>
            {/* Linear blur overlay fixed on top */}
            <div className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none linear-blur-to-b" />
            
            {/* Navbar */}
            <div className={`navbar fixed top-1 left-0 right-0 w-auto px-2.5 mx-24 rounded-full h-14 min-h-14 z-50 transition-all duration-300
                ${isScrolled ? "shadow-main border border-base/10 backdrop-blur-sm bg-white/30 text-white" : "text-white"}
                `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="px-4 py-2 bg-main/15 rounded-full text-md font-medium">PT. Bharata Alam Sentosa</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 rounded-box shadow-lg z-[60]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className={`px-4 py-2 rounded-full text-base text-sm font-medium transition-all duration-300 hover:bg-main hover:shadow-custom
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