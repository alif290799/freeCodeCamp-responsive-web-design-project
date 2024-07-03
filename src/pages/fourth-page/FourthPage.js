import React from "react";
import Journey from "../../assets/Journey.png";
import Frame from "../../assets/Frame 3.png";

const FourthPage = () => {
    return (
        <>
            <div className="mx-5 lg:mx-0 rounded-lg bg-orange-200 flex flex-col gap-5 lg:gap-10 p-5 justify-center items-center mb-16">
                <div className="font-serif text-2xl lg:text-4xl font-semibold">
                    The Easy Way to Order
                </div>
                <div>
                    <img src={Journey} className="object-contain" alt="" />
                </div>
            </div>
            <div className="mx-5 lg:mx-0 flex flex-col gap-5 lg:gap-10 p-5 justify-center items-center mb-16">
                <div className="font-serif text-2xl lg:text-4xl font-semibold">
                    Subscribe Our Newsletter
                </div>
                <div className="flex gap-5">
                    <input
                        type="text"
                        className="w-[48rem] border-solid border-gray-200 border-[1px] rounded p-2"
                        placeholder="Type your email"
                    />
                    <button>
                        <img src={Frame} className="object-contain" alt="" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default FourthPage;
