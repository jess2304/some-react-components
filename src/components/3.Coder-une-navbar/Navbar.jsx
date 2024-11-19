import React from "react";
import { useState } from "react";
import close from "../../assets/icons8-close.svg";
import hamburger from "../../assets/burger-menu-svgrepo-com.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200">
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center justify-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relativ sm:flex-row sm:pb-0`}
      >
        <li>
          <Link className="inline-block py-2 mx-4 text-lg sm:py-0" to="/">
            Quelques Composants
          </Link>
        </li>
        <li>
          <Link className="inline-block py-2 mx-4 text-lg sm:py-0" to="/fruity">
            Fruity
          </Link>
        </li>
      </ul>
      <button className="ml-auto sm:hidden" onClick={() => setShowMenu(!showMenu)}>
        <img className="w-4" src={showMenu ? close : hamburger} />
      </button>
    </nav>
  );
}
