import React from "react";

const Header = ({ children }) => {
    return (
        <header className="w-full bg-white py-4 sticky top-0 left-0 z-10">
            {children}
        </header>
    );
};

export default Header;
