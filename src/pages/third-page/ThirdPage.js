import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

const ThirdPage = () => {
    return (
        <div className="mb-14 mt-[-5rem]">
            <div className="flex justify-between items-center mb-16 p-5 sm:p-5 lg:p-0 max-w-6xl mx-auto">
                <div className="w-[22rem] md:w-[26rem] text-2xl md:text-3xl font-semibold">
                    Some people are very <br /> satisfied buying a house here
                </div>
                <div>
                    <a href="/" className="underline font-semibold">
                        View All
                    </a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <TestimonialCard />
            </div>
        </div>
    );
};

export default ThirdPage;
