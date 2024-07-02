import React from "react";
import Option from "../Option";
import { labels, options } from "../../data";

const OptionSmall = () => {
    return (
        <div className="px-5 flex-col flex gap-2 mt-[-.8rem] sm:hidden">
            <div className="w-full h-28 flex justify-between items-center">
                <Option label={labels[0]} options={options[0]} />
                <Option label={labels[1]} options={options[1]} />
            </div>
            <div className="w-full h-28 flex justify-between items-center">
                <Option label={labels[2]} options={options[2]} />
                <Option label={labels[3]} options={options[3]} />
            </div>
            <button className="w-full bg-gray-400 py-5 text-xl text-white mt-5">
                SEARCH
            </button>
        </div>
    );
};

export default OptionSmall;
