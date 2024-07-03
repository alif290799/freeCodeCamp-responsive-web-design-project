import React from "react";
import { useState } from "react";

const list = [
    "SHOP",
    "NEW ARRIVALS",
    "SALE",
    "BLOG",
    "SEARCH",
    "BAGS",
    "PROFILE",
];

export const Hamburger = () => {
    const [triggerOpen, setTriggerOpen] = useState(false);

    const triggerOpenFunction = () => {
        setTriggerOpen(!triggerOpen);
    };
    return (
        <>
            <div
                className={`${
                    triggerOpen ? "flex" : "hidden"
                } absolute bg-white top-0 left-0 right-0 flex flex-col justify-center items-center h-screen gap-8`}
            >
                <ul className="flex flex-col items-center gap-5 text-3xl">
                    {list.map((list, index) => {
                        return (
                            <li>
                                <a href="/" key={index}>
                                    {list}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div
                    onClick={triggerOpenFunction}
                    className="absolute top-4 right-4 hover:cursor-pointer"
                >
                    <span className="material-symbols-outlined text-4xl">
                        close
                    </span>
                </div>
            </div>
            <div onClick={triggerOpenFunction} className="hover:cursor-pointer">
                <span className="material-symbols-outlined text-4xl">menu</span>
            </div>
        </>
    );
};
