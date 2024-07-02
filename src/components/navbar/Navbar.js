import { Hamburger } from "./Hamburger";

const list = ["HOME", "TO RENT", "FOR SALE", "BLOG"];

const Navbar = () => {
    return (
        <nav className="relative flex justify-between items-center py-5 mx-auto max-w-6xl px-5 xl:px-0">
            <div className="text-4xl md:text-5xl">
                <p>HOME.</p>
            </div>
            <div className="hidden md:flex">
                <ul className="flex items-center gap-8 text-4xl md:text-xl">
                    {list.map((list, index) => {
                        return (
                            <li>
                                <a href="/" key={index}>
                                    {list}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="hidden md:flex">
                <button className="bg-gray-300 p-4 px-8 text-4xl md:text-xl">
                    SIGN IN
                </button>
            </div>
            <div className="flex md:hidden">
                <Hamburger />
            </div>
        </nav>
    );
};

export default Navbar;
