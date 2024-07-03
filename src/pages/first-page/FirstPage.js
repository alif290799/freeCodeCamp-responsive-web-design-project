import React from "react";
import imghero from "../../assets/img-hero.png";
import Brand from "../../components/Brand.js";

const FirstPage = () => {
    return (
        <>
            <div className="flex flex-col px-5 lg:px-0 md:flex-row pt-20 md:pt-0 items-center gap-10 md:px-5 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col md:gap-8 gap-12 lg:7">
                    <p className="font-serif text-6xl lg:text-6xl md:text-4xl md:w-[20rem] lg:w-[26rem]">
                        Discover the Latest Fashion Trends
                    </p>
                    <p className="font-semibold lg:text-base md:text-xs w-96">
                        From stylish dresses to trendy tops and must-have
                        accessories, we have everything you need to stay on top
                        of the latest fashion trends. Our expertly curated
                        collection features the hottest styles from top
                        designers, so you can always find the perfect look for
                        any occasion. Shop now and discover your new favorite
                        fashion pieces.
                    </p>
                    <button className="bg-orange-500 p-2 px-16 w-full md:w-72 rounded-lg font-semibold ">
                        Shop Now
                    </button>
                </div>
                <div className="lg:w-[32rem] md:flex md:w-[24rem] hidden lg:flex">
                    <img src={imghero} alt="" />
                </div>
            </div>
            <Brand />
        </>
    );
};

export default FirstPage;
