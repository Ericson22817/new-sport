"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "./cart";
import SearchDrawer from "./search";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed mt-3 md:py-3 lg:py-3 z-50 flex items-center bg-white text-black shadow-md max-sm:py-3 max-sm:w-full lg:w-fit lg:mx-40  md:w-full md:flex-col max-sm:flex-col rounded-b-md">
      <div className="flex px-10 gap-15">
        <nav className="items-center md:hidden hidden lg:flex gap-20 px-5">
          <Link href="/" className="hover:text-red-500 font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 font-semibold">
            About
          </Link>
          <Link href="/team" className="hover:text-red-500 font-semibold">
            Team
          </Link>
          <Link href="/fixtures" className="hover:text-red-500 font-semibold">
            Fixtures
          </Link>
        </nav>

        <div className="flex items-center lg:flex-col space-x-1">
          <Image
            src="/project-logo.jpg"
            alt="Sportz Logo"
            width={50}
            height={50}
          />
          <div className="flex flex-row gap-2">
            <h2 className="text-md font-semibold ">SNIPE</h2>
            <h2 className="text-md font-semibold ">FC</h2>
          </div>
        </div>

        <nav className="md:hidden hidden lg:flex items-center gap-20 px-5">
          <Link href="/shop" className="hover:text-red-500 font-semibold">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-red-500 font-semibold">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-red-500 font-semibold">
            Blog
          </Link>

          <div className=" cursor-pointer flex gap-3">
            <SearchDrawer />
            <CartDrawer />
          </div>
        </nav>
        

        <div className="lg:hidden md:flex flex gap-5 items-center pl-30 md:pl-140  md:pt-2">
          <div className="relative cursor-pointer flex gap-3">
            <SearchDrawer />
            <CartDrawer />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden md:flex md:px-10 max-sm:px-5 bg-gray-100  text-black font-semibold shadow-md py-4 w-full">
          <nav className="flex flex-col items-start mx-5 gap-4">
            <Link
              href="/"
              className="hover:text-red-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-red-500"
            >
              About
            </Link>
            <Link
              href="/team"
              className="hover:text-red-500"
            >
              Team
            </Link>
            <Link
              href="/fixtures"
              className="hover:text-red-500"
            >
              Fixtures
            </Link>
            <Link
              href="/shop"
              className="hover:text-red-500"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-500"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="hover:text-red-500"
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
