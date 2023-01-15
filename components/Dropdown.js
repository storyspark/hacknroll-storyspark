import Link from "next/link";
import { useState, useEffect } from "react";

export default function Dropdown() {
    
    return (            
        <div class="flex justify-center h-screen">
            <div className="relative my-32">
                <button className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                    <svg className="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                <div x-show="dropdownOpen" className="fixed inset-0 h-full w-full z-10"></div>

                <div x-show="dropdownOpen" className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        your profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Your projects
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Help
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Sign Out
                    </a>
                </div>
            </div>
        </div>
    )
}