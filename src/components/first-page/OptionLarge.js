import React from "react";
import Option from "../Option";
import { labels, options } from "../../data";

const OptionLarge = () => {
    return (
        <div className="lg:flex items-center absolute bg-white w-[64rem] lg:top-[23rem] right-0 h-24 hidden shadow-lg">
            <div className="w-full h-28 flex justify-between items-center">
                <Option label={labels[0]} options={options[0]} />
                <Option label={labels[1]} options={options[1]} />
                <Option label={labels[2]} options={options[2]} />
                <Option label={labels[3]} options={options[3]} />
            </div>
            <button className="w-72 bg-gray-400 py-5 text-xl text-white h-full">
                SEARCH
            </button>
        </div>
    );
};

export default OptionLarge;
