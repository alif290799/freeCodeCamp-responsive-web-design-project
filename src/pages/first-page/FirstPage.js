import React from "react";
import Section from "../../components/Section";
import firstpage from "../../assets/firstpage.png";
import OptionSmall from "../../components/first-page/OptionSmall";
import OptionMed from "../../components/first-page/OptionMed";
import OptionLarge from "../../components/first-page/OptionLarge";

const FirstPage = () => {
    return (
        <>
            <Section>
                <div className="flex-col pt-7 flex gap-10 md:pt-10 md:gap-10 lg:gap-16 lg:pt-14">
                    <div className="flex justify-between items-center px-5 md:px-5 lg:px-0">
                        <div className="text-7xl leading-[5rem] w-96 sm:text-7xl sm:leading-tight sm:w-96 md:text-7xl md:w-[26rem] md:px-0 lg:text-8xl lg:w-[30rem] lg:px-0">
                            Ready to find your new home
                        </div>
                        <div className="border-solid border-gray-600 border-2 hidden sm:flex sm:h-[14.5rem] sm:mr-12 md:h-[12.7rem] md:mr-14 lg:h-[24rem] lg:ml-10"></div>
                        <div className="hidden sm:flex sm:w-[15rem] sm:text-lg md:w-[20rem] md:text-2xl lg:w-[25rem] lg:text-4xl text-gray-400 text-right">
                            looking for a house with a low price and quality
                            here, and sell your house quickly here.
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={firstpage}
                            alt=""
                            className="h-60 w-full object-cover px-5 sm:w-full sm:h-full lg:px-0"
                        />
                        <OptionLarge />
                    </div>
                    <OptionSmall />
                    <OptionMed />
                </div>
            </Section>
        </>
    );
};

export default FirstPage;
