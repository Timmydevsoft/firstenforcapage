import React from "react";
import MobileMenu from "./mobileMenu";
import close from "../assets/icon-close.svg";
import hamburger from "../assets/icon-hamburger.svg";
const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className=" flex py-4 lg:block justify-end lg:justify-center w-full">
      <div className="hidden lg:flex items-center justify-between w-full">
        <div></div>
        <ul className="flex gap-3">
          {[
            {
              name: "For Mentorship",
              to: "mentor-techies.com",
            },
            { name: "For Job seekers", to: "/mentee/login" },
          ].map((item, index) => (
            <li key={index} className="text-white">
              <a href={item.to}>{item.name}</a>
            </li>
          ))}
        </ul>

        <button className="py-3 px-5 rounded-full text-white shadow-sm  bg-getstarted  hover:bg-blue-800">
          <a href="mentor-techies.com">Get Started</a>
        </button>
      </div>

      <button onClick={handleMenu} className="lg:hidden">
        <img src={openMenu ? close : hamburger} alt="menu icon icon" />
      </button>
      {openMenu ? <MobileMenu /> : null}
    </div>
  );
};
export default Header;
