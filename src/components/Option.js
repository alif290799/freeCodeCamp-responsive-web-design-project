import React from "react";

const Option = ({ label, options }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-full w-[12rem] ">
            <label className="font-semibold text-xl">{label}</label>
            <select
                name={label.toLowerCase().replace(" ", "-")}
                id=""
                className="px-2 font-semibold text-xl"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Option;
