import React from "react";
import logoImg from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-very-dark-gray-blue text-white py-20 px-4 rounded-tr-[10vh]">
      <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:justify-center lg:gap-24">
        <img src={logoImg} alt="" />
        <nav className="flex flex-col gap-8 lg:flex-row lg:gap-24">
          <div>
            <h2 className="font-semibold mb-4">Product</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Connect</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
