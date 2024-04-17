import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import Navlink from "../components/Navlink";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="flex w-3/4 m-auto py-4 justify-between items-center ">
        <Link
          href={"/"}
          className="flex items-center gap-4 text-2xl font-[700]"
        >
          <Image
            src={Logo}
            height={40}
            width={40}
            alt="Logo"
            priority
            className="logo_img "
          />
          NextMeal
        </Link>
        <nav>
          <ul className="flex items-center gap-16 font-[500]">
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
