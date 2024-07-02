import React from "react";
import fourthpage2 from "../../assets/fourthpage2.png";
import fourthpage3 from "../../assets/fourthpage3.png";
import fourthpage4 from "../../assets/fourthpage4.png";

const FourthPage = () => {
    return (
        <>
            <div className="flex justify-between items-center mb-10 p-5 sm:p-5 lg:p-0 max-w-6xl mx-auto">
                <div className="w-[22rem] md:w-[26rem] text-2xl md:text-3xl font-semibold">
                    Always check our latest <br /> blog here
                </div>
                <div>
                    <a href="/" className="underline font-semibold">
                        View All
                    </a>
                </div>
            </div>
            <div className="mb-16 relative px-5 lg:max-w-6xl lg:mx-auto lg:px-0 lg:flex lg:justify-between lg:items-start lg:gap-7">
                <div className="lg:w-1/2">
                    <img
                        src={fourthpage2}
                        alt="House"
                        className="mb-5 w-full object-cover"
                    />
                    <p className="text-2xl font-semibold mb-2">
                        Tips and tricks in choosing a house
                    </p>
                    <p className="text-gray-400">
                        tips and tricks to buy a house easily here is to buy at
                        a low price
                    </p>
                </div>
                <div className="lg:w-1/2 space-y-5 hidden md:flex md:flex-col">
                    <div className="flex items-center gap-5">
                        <div className="flex-1">
                            <p className="text-xl font-semibold">
                                Creating a clean and elegant home
                            </p>
                            <p className="text-gray-400">Albert firdaus</p>
                        </div>
                        <img
                            src={fourthpage3}
                            alt="Clean Home"
                            className="w-64 h-32 object-cover "
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex-1">
                            <p className="text-xl font-semibold">
                                Good paint color for home
                            </p>
                            <p className="text-gray-400">Rusy firdaus</p>
                        </div>
                        <img
                            src={fourthpage4}
                            alt="Paint Roller"
                            className="w-64 h-32 object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthPage;
