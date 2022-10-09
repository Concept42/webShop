import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const navItems = [
  { src: "/", page: "HOME" },
  { src: "/shop", page: "SHOP" },
  { src: "/blog", page: "BLOG" },
  { src: "/contact", page: "CONTACT" },
];

function Navigation() {
  return (
    <>
      <div className="sticky top-0 z-[999]  mx-auto flex h-full w-full items-center justify-around bg-white p-6 shadow">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} alt="Modaz" />
          </Link>
        </div>
        <ul className="font-poppins flex items-center gap-10 font-normal  ">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.src}>
                <li className="cursor-pointer hover:text-red-600">
                  {item.page}
                </li>
              </Link>
            );
          })}

          <div className="ml-5 flex items-center justify-center gap-5">
            <li className="cursor-pointer hover:text-red-600 ">
              <FaSearch />
            </li>
            <li className="cursor-pointer rounded-full bg-slate-200 p-3 hover:text-red-600">
              <FaShoppingCart />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
