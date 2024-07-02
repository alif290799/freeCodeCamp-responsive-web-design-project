import React from "react";
import { testimonials } from "../data";

const TestimonialCard = () => {
    return (
        <div className="overflow-hidden flex justify-center items-center flex-col lg:flex-row lg:items-baseline gap-10">
            {testimonials.map((testimonial, index) => (
                <div className="w-[26rem]" key={index}>
                    <img
                        src={testimonial.imgSrc}
                        className="object-contain relative"
                        alt=""
                    />
                    <div className="mt-5 text-xl font-semibold">
                        "{testimonial.comment}"
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestimonialCard;
