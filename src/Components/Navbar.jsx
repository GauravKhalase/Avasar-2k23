import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {

  const [menu,setmenu] = useState(false);

  return (
    <div className="relative text-white">
      <nav>
        <ul className="flex flex-col md:flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Event-Info">Event Information</Link>
          </li>
          <li>
            <Link to="/Terms-and-Conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/Refund-Policy">Refund Policy</Link>
          </li>
          <li>
            <Link to="/Privacy-Policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
      {menu ? (
          <button onClick={() => setmenu(false)} className=" md:hidden">
            <BiMenuAltRight fontSize={35} color="white" />
          </button>
        ) : (
          <button onClick={() => setmenu(true)} className=" md:hidden">
            <RxCross2 fontSize={35} color="white" />
          </button>
        )}
    </div>
  );
};

export default Navbar;
