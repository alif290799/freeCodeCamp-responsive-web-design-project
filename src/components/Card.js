import React from "react";

const Card = ({ key, img, productName, rating, price }) => {
    return (
        <div
            key={key}
            className="rounded-2xl flex flex-col gap-3 p-3 border-solid border-gray-300 border-[1px]"
        >
            <div>
                <img src={img} alt="" />
            </div>
            <div className="font-bold">{productName}</div>
            <div className="text-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-yellow-500">
                    star
                </span>
                {rating}
            </div>
            <div className="font-semibold">{price}</div>
        </div>
    );
};

export default Card;
