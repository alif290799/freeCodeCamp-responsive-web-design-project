import React from "react";
import logo from "../assets/logo.png";
import frame1 from "../assets/Frame 32.png";
import frame2 from "../assets/Frame 35.png";

const productCategory = [
    "Women's clothing",
    "Menswear",
    "Accessories",
    "Shoes",
];

const company = ["About", "Contact", "Privacy Policy", "Terms of Service"];

const Footer = () => {
    return (
        <footer className="max-w-6xl mx-auto text-xs py-10 px-5 lg:px-0 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <img src={logo} alt="DressLy" className="mb-4" />
                <p className="text-black">
                    We are an online fashion store that offers a diverse
                    selection of the latest and trendiest fashion products for
                    both men and women. Our collection includes everything from
                    casual wear to formal attire, ensuring that you always have
                    the perfect outfit for any occasion. We are dedicated to
                    providing our customers with an enjoyable and hassle-free
                    shopping experience, from the moment you browse our site to
                    the time your order arrives at your doorstep. With a
                    commitment to quality, style, and customer satisfaction, we
                    strive to make fashion accessible and exciting for everyone.
                </p>
            </div>
            <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2">
                    Product Category
                </h3>
                {productCategory.map((product, index) => (
                    <div
                        key={index}
                        className="text-gray-500 pb-1 hover:underline"
                    >
                        <a href="/">{product}</a>
                    </div>
                ))}
            </div>
            <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2">Company</h3>
                {company.map((item, index) => (
                    <div
                        key={index}
                        className="text-gray-500 pb-1 hover:underline"
                    >
                        <a href="/">{item}</a>
                    </div>
                ))}
            </div>
            <div className="md:col-span-4">
                <h3 className="font-bold text-gray-900 mb-2">
                    Download Our App
                </h3>
                <div className="flex space-x-4">
                    <button>
                        <img src={frame1} alt="App Store" />
                    </button>
                    <button>
                        <img src={frame2} alt="Google Play" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
