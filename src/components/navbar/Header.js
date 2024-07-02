import React from "react";

const Header = ({ children }) => {
    return (
        <header className="w-full bg-white sticky top-0 z-10">
            {children}
        </header>
    );
};

export default Header;
