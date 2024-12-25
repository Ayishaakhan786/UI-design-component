'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from './img/logo01.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[10px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="javascript:void(0)">
          <Image src={Logo} alt="logo" className="w-20" />
        </a>
        {/* Toggle Button for Mobile */}
        <button
          id="toggleOpen"
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Main Navigation */}
        <div
          id="collapseMenu"
          className={`lg:flex lg:gap-5 lg:static lg:bg-transparent lg:shadow-none lg:overflow-visible lg:w-auto lg:p-0 lg:h-auto ${
            menuOpen
              ? "fixed inset-0 bg-white z-50 p-6 h-full w-full overflow-auto transition-transform transform translate-x-0"
              : "hidden"
          }`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>
          {/* Centered Links */}
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 text-center lg:text-left mx-auto w-full justify-center">
            <li>
              <Link
                href="/"
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="../blogs"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="../about"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="../contact"
                className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}