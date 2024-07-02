import secondpage1 from "../src/assets/secondpage1.png";
import secondpage2 from "../src/assets/secondpage2.png";
import secondpage3 from "../src/assets/secondpage3.png";
import secondpage4 from "../src/assets/secondpage4.png";
import secondpage5 from "../src/assets/secondpage5.png";
import secondpage6 from "../src/assets/secondpage6.png";
import thirdpage1 from "../src/assets/thirdpage1.png";
import thirdpage2 from "../src/assets/thirdpage2.png";

export const labels = ["Select City", "Price", "Rooms", "Footage"];

export const options = [
    ["Jakarta", "Surabaya", "Bandung", "Yogyakarta"],
    ["$1000 - $2000", "$2000 - $3000", "$3000 - $4000"],
    ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms"],
    ["50 sqft", "100 sqft", "150 sqft", "200 sqft"],
];

export const slides = [
    {
        imgSrc: secondpage1,
        rooms: "3 room",
        title: "Orange House",
        address: "Jl Klapanunggal, cileungsi, bogor",
        price: "$1,435,000",
    },
    {
        imgSrc: secondpage2,
        rooms: "4 room",
        title: "Green House",
        address: "Jl Raya, Jakarta, bogor",
        price: "$1,500,000",
    },
    {
        imgSrc: secondpage3,
        rooms: "5 room",
        title: "Blue House",
        address: "Jl Merdeka, Bandung, bogor",
        price: "$1,600,000",
    },
    {
        imgSrc: secondpage4,
        rooms: "2 room",
        title: "Red House",
        address: "Jl Sudirman, Surabaya, bogor",
        price: "$1,200,000",
    },
    {
        imgSrc: secondpage5,
        rooms: "6 room",
        title: "Purple House",
        address: "Jl Malioboro, Yogyakarta, bogor",
        price: "$1,800,000",
    },
    {
        imgSrc: secondpage6,
        rooms: "3 room",
        title: "White House",
        address: "Jl Melati, Denpasar, Bali",
        price: "$1,300,000",
    },
];

export const testimonials = [
    {
        imgSrc: thirdpage1,
        userName: "Jane Doe",
        comment:
            "I am very satisfied buying a house here because it is fast and easy",
    },
    {
        imgSrc: thirdpage2,
        userName: "Jiny Doe",
        comment: "Buying a house here is very cheap and high quality",
    },
    {
        imgSrc: thirdpage1,
        userName: "John Smith",
        comment: "The service was excellent and the process was seamless.",
    },
];
