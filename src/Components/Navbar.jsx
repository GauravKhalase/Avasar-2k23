import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import logo from "../Assets/logo.png";
import { Navlinks } from "../Data/Navlinks";

const Navbar = () => {
  const [menu, setmenu] = useState(true);

  return (
    <div className="relative text-white">
      <nav>
        <div className="flex flex-row justify-between items-center px-4 py-4">
          <img src={logo} alt="" />
          {menu ? (
            <button onClick={() => setmenu(false)} className=" md:hidden">
              <BiMenuAltRight fontSize={35} color="white" />
            </button>
          ) : (
            <div></div>
          )}
        </div>
        {menu ? (
          <div></div>
        ) : (
          <div className="absolute z-50 top-0 right-0 flex flex-col md:flex-row justify-center bg-[#29343f]  rounded-l-xl w-[64%] mx-auto px-4 pt-5 pb-14 gap-2">
            <div className="text-right">
              <button onClick={() => setmenu(true)} className=" md:hidden">
                <RxCross2 fontSize={35} color="white" />
              </button>
            </div>

            {Navlinks.map((ele, index) => {
              return (
                <div
                  className="text-lg text-semibold font-Kanit px-4 py-2.5"
                  key={index}
                >
                  <Link to={ele.path}>{ele.title}</Link>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
