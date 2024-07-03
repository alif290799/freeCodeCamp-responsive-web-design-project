import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { images } from "../arrayData";

const Brand = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        const updateSizes = () => {
            const totalWidth = marquee.scrollWidth;
            const viewportWidth = marquee.clientWidth;

            gsap.killTweensOf(marquee);
            gsap.fromTo(
                marquee,
                { x: 0 },
                {
                    x: -totalWidth + viewportWidth,
                    duration: 40,
                    ease: "linear",
                    repeat: -1,
                    onRepeat: () => {
                        gsap.set(marquee, { x: 0 });
                    },
                }
            );
        };

        updateSizes();
        window.addEventListener("resize", updateSizes);

        return () => {
            window.removeEventListener("resize", updateSizes);
        };
    }, []);

    return (
        <div className="flex overflow-hidden px-5 mt-10 lg:px-0">
            <div ref={marqueeRef} className="flex space-x-10">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="object-contain h-28"
                    />
                ))}
            </div>
        </div>
    );
};

export default Brand;
