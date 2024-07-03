import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import bag from "../assets/bag.svg";
import { Hamburger } from "./Hamburger";

const list = ["Shop", "New Arrivals", "Sale", "Blog"];
const buttonList = [search, bag, profile];

const Navbar = () => {
    return (
        <nav className="px-5 lg:px-0 flex justify-between items-center max-w-6xl mx-auto">
            <div className="hover:cursor-pointer">
                <img src={logo} alt="logo" />
            </div>
            <ul className="hidden sm:flex justify-center items-center gap-8 font-semibold">
                {list.map((list, index) => (
                    <li key={index}>
                        <a href="/">{list}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden sm:flex justify-center items-center gap-5">
                {buttonList.map((list, index) => (
                    <button>
                        <img src={list} alt={index} />
                    </button>
                ))}
            </div>
            <div className="flex sm:hidden">
                <Hamburger />
            </div>
        </nav>
    );
};

export default Navbar;
