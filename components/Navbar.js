import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-gray-700">
            <div className="flex justify-between lg:w-[10%] w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight">StorySpark</span>
                </div>
                <div className="block lg:hidden ">
                    <button
                        id="nav"
                        onClick={() => setNavbar(!navbar)}
                        className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        
            <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="bg-gray-100 w-auto h-10 pl-2 pr-8 mr-2 text-sm focus:outline"
                        type="search" name="search" placeholder="Find a Story" />
                </div>
                <div className={`text-black flex md:block md:pb-0 md:mt-0 transition-all duration-500 ${
                            navbar ? "block" : "hidden delay-200"}`}>
                    <a href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Create
                    </a>
                    <a href="/browse"
                    className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Browse
                    </a>
                    <a href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        About Us
                    </a>
                    <div className="block lg:inline-block">
                        <a href="#"
                        className="text-md px-4 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign
                            in</a>
            
                        <a href="#"
                        className="text-md px-4  ml-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">login</a>
                    </div>
                </div>
            </div>
        
        </nav>
        
    )
}