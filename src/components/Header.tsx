import React, { useState } from "react";
import logoImg from "../assets/images/logo.svg";
import {
  IoIosArrowUp as ArrowUpIcon,
  IoIosArrowDown as ArrowDownIcon,
} from "react-icons/io";
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { IoMdClose as CloseMenuIcon } from "react-icons/io";
import NavList from "./NavList";

const productListData = {
  heading: "Product",
  listItems: [
    {
      link: "#",
      label: "Overview",
    },
    {
      link: "#",
      label: "Pricing",
    },
    {
      link: "#",
      label: "Marketplace",
    },
    {
      link: "#",
      label: "Features",
    },
    {
      link: "#",
      label: "Integrations",
    },
  ],
};

const companyListData = {
  heading: "Company",
  listItems: [
    {
      link: "#",
      label: "About",
    },
    {
      link: "#",
      label: "Team",
    },
    {
      link: "#",
      label: "Blog",
    },
    {
      link: "#",
      label: "Careers",
    },
  ],
};

const connectListData = {
  heading: "Connect",
  listItems: [
    {
      link: "#",
      label: "Contact",
    },
    {
      link: "#",
      label: "Newsletter",
    },
    {
      link: "#",
      label: "Linkedin",
    },
  ],
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-orange-400 p-4">
      <div className="flex gap-4 max-w-[940px] w-full items-center flex-col justify-between lg:flex-row mx-auto">
        <div className="flex items-center justify-between w-full py-8 lg:w-[max-content] lg:mr-8">
          <img src={logoImg} alt="" />
          <div className="lg:hidden">
            {isMenuOpen ? (
              <button
                className="text-white text-4xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <CloseMenuIcon />
              </button>
            ) : (
              <button
                className="text-white text-4xl"
                onClick={() => setIsMenuOpen(true)}
              >
                <MenuIcon />
              </button>
            )}
          </div>
        </div>

        <nav className="w-full">
          <div
            className={`gap-4 flex-col bg-white p-4 ${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex lg:flex-row lg:items-center lg:pr-0 lg:bg-orange-400 lg:text-white`}
          >
            <NavList {...productListData} />
            <NavList {...companyListData} />
            <NavList {...connectListData} />

            <div className="flex flex-col py-2 items-center gap-4 border-t-[1px] border-t-gray-400 lg:flex-row lg:border-t-0 lg:ml-auto">
              <a href="#" className="py-2 px-4">
                Login
              </a>
              <a
                href="#"
                className="py-2 px-8 rounded-[100vh] bg-red-400 text-white font-semibold lg:bg-white lg:text-light-red"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
