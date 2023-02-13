import React, { useState } from "react";
import {
  IoIosArrowUp as ArrowUpIcon,
  IoIosArrowDown as ArrowDownIcon,
} from "react-icons/io";

interface NavListProps {
  heading: string;
  listItems: {
    link: string;
    label: string;
  }[];
}

const NavList = ({ heading, listItems }: NavListProps) => {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <div className="flex flex-col lg:relative">
      <button
        type="button"
        className="flex self-center items-center gap-2 py-2 justify-center"
        onClick={() => setIsExpended((prev) => !prev)}
      >
        <span className="text-lg font-semibold">{heading}</span>
        {isExpended ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>

      <div
        className={`${
          isExpended ? "scale-y-100" : "scale-y-0 h-0"
        } transition-transform origin-top lg:absolute lg:top-[120%] lg:bg-white lg:p-4 lg:shadow-xl`}
      >
        <ul className="flex flex-col gap-3 items-center bg-gray-200 lg:bg-transparent lg:text-black">
          {listItems?.map(({ link, label }, index) => (
            <li className="py-2" key={index}>
              <a href={link} className="lg:hover:font-semibold">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavList;
