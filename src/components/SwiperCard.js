import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "tailwindcss/tailwind.css";
import { slides } from "../data";

const App = () => {
    return (
        <div className="container flex items-center">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                className="w-full "
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <div className="relative bg-white overflow-hidden">
                            <img
                                src={slide.imgSrc}
                                alt="House"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute bottom-[8rem] left-0">
                                <span className="text-orange-500 text-sm font-semibold bg-white p-2">
                                    {slide.rooms}
                                </span>
                            </div>
                            <div className="absolute top-[1.5rem] right-[1rem]">
                                <span className="material-symbols-outlined bg-white p-2 rounded-full text-orange-500">
                                    favorite
                                </span>
                            </div>
                            <div className="p-4">
                                <h2 className="text-gray-800 text-xl font-bold mt-2">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    {slide.address}
                                </p>
                                <p className="text-orange-500 text-lg font-semibold mt-2">
                                    {slide.price}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default App;
