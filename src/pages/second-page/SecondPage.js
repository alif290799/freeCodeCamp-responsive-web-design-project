import React from "react";
import Section from "../../components/Section";
import SwiperCard from "../../components/SwiperCard";

const SecondPage = () => {
    return (
        <>
            <Section>
                <div className="mt-64 sm:mt-36 md:mt-48 lg:mt-72">
                    <div className="py-10 pt-5 px-5 lg:px-0 flex items-center gap-10 lg:gap-20">
                        <p className="text-3xl lg:text-4xl font-semibold">
                            The Latest
                        </p>
                        <p className="font-semibold text-xl lg:text-2xl text-orange-500">
                            For Sale
                        </p>
                        <p className="font-semibold text-xl lg:text-2xl">
                            To Rent
                        </p>
                    </div>
                    <SwiperCard></SwiperCard>
                </div>
            </Section>
        </>
    );
};

export default SecondPage;
