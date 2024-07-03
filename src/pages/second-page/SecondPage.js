import React from "react";
import { topSelection } from "../../arrayData";
import SwiperContainer from "../../components/SwiperContainer";

const SecondPage = () => {
    return (
        <div>
            <div className="px-5 lg:px-0 text-4xl font-serif pb-10">
                Top Selection
            </div>
            <div className="hidden lg:flex flex-col lg:flex-row justify-center items-center gap-5">
                {topSelection.map((selection, index) => (
                    <div className="relative" key={index}>
                        <img src={selection.src} alt="" />
                    </div>
                ))}
            </div>
            <div className="lg:hidden flex">
                <SwiperContainer>
                    {topSelection.map((selection, index) => (
                        <div className="relative" key={index}>
                            <img src={selection.src} alt="" />
                        </div>
                    ))}
                </SwiperContainer>
            </div>
        </div>
    );
};

export default SecondPage;
