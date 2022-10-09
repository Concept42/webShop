import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="mx-auto block h-full min-w-[1200px]  max-w-7xl gap-5 px-20 pt-20">
      <div className="grid grid-flow-col grid-cols-4">
        <ul className="flex flex-col gap-3">
          <li>About Us</li>
          <li>Online Store</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>Login/Register</li>
          <li>Your Cart</li>
          <li>Wishlist Items</li>
          <li>Your checkout</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li>FAQs</li>
          <li>Term of service</li>
          <li>Privacy Policy</li>
          <li>Returns</li>
        </ul>
        <div className="h-full w-full ">
          <Image src={logo} alt="logo" />
          <p>112 Kingdom,NA 12, New York</p>
          <p>+12 345 678 910</p>
          <p>infor.deercreative@gmail.com</p>
        </div>
      </div>
      <div className="mt-16 h-0.5 w-full bg-gray-200 "></div>
      <span className="flex h-full w-full items-center justify-center gap-1 py-5">
        <p className="text-gray-400">Copyright @2018</p>
        <p>Modaz</p>
      </span>
    </div>
  );
}

export default Footer;
