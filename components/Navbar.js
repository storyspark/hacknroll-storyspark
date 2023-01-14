import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-gray-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex text-gray-800 mr-16">
                    <Link href="/"><Image alt="logo" src="/logo.svg" height={50} width={50}></Image></Link>
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
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 18L13.7617 14.255L17.5 18ZM15.8333 9.25002C15.8333 11.1286 15.087 12.9303 13.7587 14.2587C12.4303 15.5871 10.6286 16.3334 8.74999 16.3334C6.87137 16.3334 5.0697 15.5871 3.74132 14.2587C2.41293 12.9303 1.66666 11.1286 1.66666 9.25002C1.66666 7.3714 2.41293 5.56973 3.74132 4.24135C5.0697 2.91296 6.87137 2.16669 8.74999 2.16669C10.6286 2.16669 12.4303 2.91296 13.7587 4.24135C15.087 5.56973 15.8333 7.3714 15.8333 9.25002V9.25002Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                    <input
                        className="bg-gray-100 md:w-[336px] h-10 pl-16 mr-2 text-sm focus:outline"
                        type="search" name="search" placeholder="Find a Story" />
                </div>
                <div className={`flex-1 text-black justify-self-center lg:block lg:pb-0 lg:mt-0 transition-all duration-500 ${
                            navbar ? "block" : "hidden delay-200"}`}>
                    <button onClick={() => setDropDown(!dropDown)} className="text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Create <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div id="dropdown" class={`${dropDown ? "visible": "hidden"} z-10 fixed bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-100`}>
                        <ul class="py-1 text-sm text-black dark:text-gray-800" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="/personal" class="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800">Personal</a>
                            </li>
                            <li>
                                <a href="/professional" class="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800">Professional</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#responsive-header"
                    className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        Browse
                    </a>
                    <a href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                        About Us
                    </a>
                </div>
                    <div className="block lg:inline-block mt-2 lg:mt-0 text-center">
                        <a href="#" className="text-md px-4 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">Sign in</a>
                    </div>
            </div>
        </nav>
        
    )
}