import React from "react";

import {
  IoIosArrowUp as ArrowUpIcon,
  IoIosArrowDown as ArrowDownIcon,
} from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <nav>
          <div>
            <button>
              Product
              <ArrowDownIcon />
              <div>
                <ul>
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
            </button>

            <button>
              Company
              <ArrowDownIcon />
              <div>
                <ul>
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
            </button>

            <button>
              Connect
              <ArrowDownIcon />
              <div>
                <ul>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Likedin</a>
                  </li>
                </ul>
              </div>
            </button>

            <div>
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
