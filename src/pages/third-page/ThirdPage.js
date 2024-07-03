import React from "react";
import { cards } from "../../arrayData";
import Card from "../../components/Card";
import SwiperContainer from "../../components/SwiperContainer";

const ThirdPage = () => {
    return (
        <>
            <div className="px-5 lg:px-0 flex justify-between items-center pb-10">
                <div className="text-4xl font-serif">Best Seller</div>
                <button className="p-2 px-5 rounded font-semibold bg-orange-200 text-xs">
                    See All
                </button>
            </div>
            <div className="hidden lg:flex justify-center items-center gap-5">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        productName={card.productName}
                        img={card.img}
                        price={card.price}
                        rating={card.rating}
                    />
                ))}
            </div>
            <div className="flex lg:hidden">
                <SwiperContainer>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            productName={card.productName}
                            img={card.img}
                            price={card.price}
                            rating={card.rating}
                        />
                    ))}
                </SwiperContainer>
            </div>
        </>
    );
};

export default ThirdPage;
